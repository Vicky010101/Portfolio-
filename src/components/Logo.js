import React from 'react';

const Logo = ({ onClick, className = '' }) => {
    return (
        <a
            href="#home"
            className={`nav-logo ${className}`}
            aria-label="Go to home"
            onClick={onClick}
        >
            <span className="logo-text">VR</span>
        </a>
    );
};

export default Logo;
