import React from 'react'
import Head from 'next/head';
import fourfour from "../images/fourfour.svg"
import Image from 'next/image';
import Link from 'next/link';
const ErrorPage = () => {
  return (
		<div>
			<Head>
				<title> 404 | Angle360 Event</title>
				<meta
					name='description'
					content='Un système de billetterie événementielle'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='w-full h-[100vh] flex flex-col space-y-4 items-center justify-center'>
				<Image src={fourfour} alt='404 page' className='w-[400px] mb-8' />
				<h2 className='text-xl text-[#C07F00]'>Il semble que nous vous ayons perdu ! 😪</h2>
				<Link
					href='/'
					className='p-4 bg-slate-100 shadow-md hover:bg-[#C07F00] hover:text-slate-100 rounded-md'
				>
					Retour à l'accueil 🏠
				</Link>
			</main>
		</div>
	);
}

export default ErrorPage