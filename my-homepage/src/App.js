import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import './styles.css';

const App = () => {
	return (
		<div className="app">
			<Header />
			<main>
				<VideoSection />
			</main>
			<Footer />
		</div>
	);
};

export default App;
