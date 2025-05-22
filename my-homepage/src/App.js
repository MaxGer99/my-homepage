import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
	const [showMainContent, setShowMainContent] = useState(false);
	const [status] = useState('On part time contracts');
	const [lastUpdated] = useState('May 22, 2025'); // Example initial timestamp

	return (
		<div
			className="app"
			style={{
				backgroundImage: `url(/Background.png)`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			{!showMainContent && (
				<SplashScreen onFinish={() => setShowMainContent(true)} />
			)}
			{showMainContent && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<header className="App-header">
						<h1>Welcome to Max Gerber's Portfolio</h1>
					</header>
					<Header status={status} lastUpdated={lastUpdated} />
					<main className="main-content">
						<img
							src="/path-to-your-headshot.jpg"
							alt="Max Gerber"
							className="headshot"
						/>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.5 }}
						>
							<AboutMe />
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 1 }}
						>
							<Projects />
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 1.5 }}
						>
							<Contact />
						</motion.div>
					</main>
					<Footer />
				</motion.div>
			)}
		</div>
	);
};

export default App;
