import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import SplashScreen from './components/SplashScreen';
import './styles.css';

const App = () => {
	const [showMainContent, setShowMainContent] = useState(false);

	return (
		<div className="app">
			{!showMainContent && (
				<SplashScreen onFinish={() => setShowMainContent(true)} />
			)}
			{showMainContent && (
				<>
					<Header />
					<main>
						<VideoSection />
					</main>
					<Footer />
				</>
			)}
		</div>
	);
};

export default App;
