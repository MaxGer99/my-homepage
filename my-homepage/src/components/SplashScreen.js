import React, { useEffect, useState } from 'react';
import '../splashScreen.css';

const SplashScreen = ({ onFinish }) => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
			onFinish();
		}, 3000); // Splash screen duration (3 seconds)

		return () => clearTimeout(timer);
	}, [onFinish]);

	if (!isVisible) return null;

	return (
		<div className="splash-screen">
			<h1>Welcome to Max Gerber's Portfolio</h1>
			<div className="loading-spinner"></div>
		</div>
	);
};

export default SplashScreen;
