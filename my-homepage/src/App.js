import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import SplashScreen from './components/SplashScreen';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
	const [showMainContent, setShowMainContent] = useState(false);

	return (
		<div className="app">
			{!showMainContent && (
				<SplashScreen onFinish={() => setShowMainContent(true)} />
			)}
			{showMainContent && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<Header />
					<main className="main-content">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 1 }}
						>
							<VideoSection />
						</motion.div>
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
