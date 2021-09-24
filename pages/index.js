import Head from 'next/head';
import Contact from '../components/contact';
import Download from '../components/download';
import FAQ from '../components/faq';
import Features from '../components/features';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/navbar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Landing Page Template</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='font-Poppins'>
				{/* Header */}
				<header>
					<Navbar />
				</header>
				{/* Main Section */}
				<Hero />
				<Features />
				<Download />
				<FAQ />
				<Contact />
				{/* Footer */}
				<Footer />
			</div>
		</>
	);
}
