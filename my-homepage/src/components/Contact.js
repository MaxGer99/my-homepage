import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<section className="contact">
			<h2>Contact</h2>
			<p>
				Feel free to reach out to me via email or through my social
				media channels.
				<br />I am always open to discussing new projects, creative
				ideas, or opportunities to collaborate.
			</p>
			<div className="contact-item" id="email">
				<h3>Email</h3>
				<p>
					Email: maxgerber99+jobs@gmail.com
					<br />
				</p>
				<a href="mailto:maxgerber99+jobs@gmail.com">Send an Email</a>
			</div>
		</section>
	);
};

export default Contact;
