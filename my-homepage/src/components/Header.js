import React from 'react';
import './Header.css';

function Header() {
	return (
		<header className="header">
			<h1 className="header-title">My Homepage</h1>
			<a href="/resume.pdf" download className="resume-button">
				Download Resume
			</a>
		</header>
	);
}

export default Header;
