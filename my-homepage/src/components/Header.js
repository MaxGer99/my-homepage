import React from 'react';
import './Header.css';

function Header({ status }) {
	return (
		<header className="header">
			<h1 className="header-title">{status}</h1>
			<a href="/resume.pdf" download className="resume-button">
				Download Resume
			</a>
		</header>
	);
}

export default Header;
