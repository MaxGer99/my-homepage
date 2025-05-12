import React, { useState } from 'react';
import './Header.css';

function Header({ status, lastUpdated }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<header className="header">
			<h1
				className="header-title"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{status}
				{isHovered && (
					<span className="status-tooltip">
						Last updated: {lastUpdated}
					</span>
				)}
			</h1>
			<a href="/resume.pdf" download className="resume-button">
				Download Resume
			</a>
		</header>
	);
}

export default Header;
