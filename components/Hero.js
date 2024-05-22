import React from "react";
import Link from "next/link";

const Hero = () => {
	return (
		<div className='w-full h-[85vh] md:px-[80px] px-[20px] flex flex-col md:items-center justify-center'>
			<h1 className='md:text-5xl text-3xl text-white font-extrabold mb-5 md:text-center'>
			Préparez-vous à vivre une expérience{" "}
				<span className='md:text-[#C07F00] text-white'>inoubliable</span>
			</h1>
			<p className='mb-2 md:text-center md:text-lg md:text-gray-100 text-white'>
			Réservez vos tickets pour les événements, séminaires, expositions, soirées, conférences et festivals les plus courus du moment.
			</p>
			<p className='mb-6 md:text-center md:text-lg md:text-gray-100 text-white'>
			Ne ratez pas ce moment privilégié - réservez vos tickets dès maintenant !
			</p>
			<Link href='/register'>
				<button className='bg-white md:px-6 px-4 py-4 text-[#C07F00] rounded font-bold'>
					CREER VOS PROPRES EVENEMENTS
				</button>
			</Link>
		</div>
	);
};

export default Hero;
