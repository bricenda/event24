import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Angle360 Event</title>
				<meta
					name='description'
					content='Un système de billetterie événementielle'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='h-[100vh] home'>
				<Nav />
				<Hero />
				<HomeSection />
				<Footer />
			</main>
		</>
	);
}
