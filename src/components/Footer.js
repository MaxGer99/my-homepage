import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>
                <a href="/about" style={{ margin: '0 10px' }}>About</a>
                <a href="/contact" style={{ margin: '0 10px' }}>Contact</a>
                <a href="/privacy" style={{ margin: '0 10px' }}>Privacy Policy</a>
            </p>
        </footer>
    );
};

export default Footer;