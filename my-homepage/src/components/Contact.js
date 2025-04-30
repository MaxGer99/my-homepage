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
			<div className="contact-item">
				Email: maxgerber99+jobs@gmail.com
			</div>
			<div className="contact-item">
				LinkedIn:{' '}
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					My LinkedIn
				</a>
			</div>
			<div className="contact-item">
				GitHub:{' '}
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					My GitHub
				</a>
			</div>
		</section>
	);
};

export default Contact;
