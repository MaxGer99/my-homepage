import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<div className="social-icons">
				<a
					href="https://www.instagram.com/gerbz__/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
				<a
					href="https://www.linkedin.com/in/max-gerber-a481851b7/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://github.com/MaxGer99"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub />
				</a>
			</div>
			<p>© 2025 Max Gerber's Homepage</p>
		</footer>
	);
};

export default Footer;
