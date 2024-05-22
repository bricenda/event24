import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { MdCancel } from "react-icons/md";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addEventToFirebase } from "../../utils/util";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";

const event = () => {
	const [user, setUser] = useState({});
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [venue, setVenue] = useState("");
	const [description, setDescription] = useState("");
	const [note, setNote] = useState("");
	const [flier, setFlier] = useState(null);
	const [buttonClicked, setButtonClicked] = useState(false);
	const router = useRouter();

	const isUserLoggedIn = useCallback(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({ email: user.email, uid: user.uid });
			} else {
				return router.push("/register");
			}
		});
	}, []);

	useEffect(() => {
		isUserLoggedIn();
	}, [isUserLoggedIn]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setButtonClicked(true);
		addEventToFirebase(
			user.uid,
			title,
			date,
			time,
			venue,
			description,
			note,
			flier,
			router
		);
	};

	const handleFileReader = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readerEvent) => {
			setFlier(readerEvent.target.result);
		};
	};

	return (
		<div>
			<Head>
				<title>Créer un nouvel événement | Angle360 Event</title>
				<meta
					name='description'
					content='Un système de billetterie événementielle'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='p-6'>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl font-bold mb-6'>Create a new event</h2>
					<Link href='/dashboard'>
						<MdCancel className='text-4xl text-[#C07F00] cursor-pointer' />
					</Link>
				</div>

				<form className='flex flex-col' onSubmit={handleSubmit}>
					<label htmlFor='title'>Titre</label>
					<input
						name='title'
						type='text'
						className='border-[1px] py-2 px-4 rounded-md mb-3'
						required
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<div className='w-full flex justify-between'>
						<div className='w-1/2 flex flex-col mr-[20px]'>
							<label htmlFor='date'>Date</label>
							<input
								name='date'
								type='date'
								className='border-[1px] py-2 px-4 rounded-md mb-3'
								required
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
						</div>
						<div className='w-1/2 flex flex-col'>
							<label htmlFor='time'>Time</label>
							<input
								name='time'
								type='time'
								className='border-[1px] py-2 px-4 rounded-md mb-3'
								required
								value={time}
								onChange={(e) => setTime(e.target.value)}
							/>
						</div>
					</div>
					<label htmlFor='venue'>Lieu</label>
					<input
						name='venue'
						type='text'
						className='border-[1px] py-2 px-4 rounded-md mb-3'
						required
						value={venue}
						onChange={(e) => setVenue(e.target.value)}
						placeholder='Adresse, Cocody, Abidjan'
					/>
					<label htmlFor='description'>
						Description <span className='text-gray-500'>(optionnel)</span>
					</label>
					<textarea
						name='description'
						rows={2}
						className='border-[1px] py-2 px-4 rounded-md mb-3'
						placeholder='Toute information ou détail utile'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<label htmlFor='note'>
					Note aux participants <span className='text-gray-500'>(optionnel)</span>
					</label>
					<textarea
						name='note'
						rows={2}
						value={note}
						onChange={(e) => setNote(e.target.value)}
						className='border-[1px] py-2 px-4 rounded-md mb-3'
						placeholder='Chaque participant devra en tenir compte'
					/>
					<label htmlFor='flier'>
					Flyer de l'événement <span className='text-gray-500'>(optionnel)</span>
					</label>
					<input
						name='flier'
						type='file'
						className='border-[1px] py-2 px-4 rounded-md mb-3'
						accept='image/*'
						onChange={handleFileReader}
					/>
					{buttonClicked ? (
						<Loading title='Le téléchargement des images pourrait mettre du temps' />
					) : (
						<button className='px-4 py-2 bg-[#C07F00] w-[200px] mt-3 text-white rounded-md'>
							Créer l'événement
						</button>
					)}
				</form>
			</main>
		</div>
	);
};

export default event;
