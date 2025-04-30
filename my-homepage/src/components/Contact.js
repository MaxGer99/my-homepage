import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<section className="contact">
			<h2>Contact</h2>
			<p>
				Feel free to reach out to me via email or through my social
				media channels.
			</p>
			<ul>
				<li>Email: maxgerber99+jobs@gmail.com</li>
				<li>
					LinkedIn:{' '}
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						My LinkedIn
					</a>
				</li>
				<li>
					GitHub:{' '}
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						My GitHub
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Contact;
