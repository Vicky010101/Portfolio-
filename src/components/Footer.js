import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p>© {currentYear} Vikas Hanamant Rathod. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
