import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : true; // dark by default
    });

    // Apply theme on mount and whenever isDark changes
    useEffect(() => {
        if (isDark) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.innerWidth < 680) setIsOpen(false);
        }
    };

    return (
        <nav className="nav" id="navbar" aria-label="Main Navigation">
            <div className="nav-container">
                <Logo onClick={(e) => handleNavClick(e, '#home')} />
                <button
                    className="nav-toggle"
                    id="nav-toggle"
                    aria-expanded={isOpen}
                    aria-controls="nav-menu"
                    aria-label="Toggle menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="nav-menu" id="nav-menu" role="menu" style={{ display: isOpen && window.innerWidth < 680 ? 'flex' : '' }}>
                    <a href="#home" className="nav-link" role="menuitem" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                    <a href="#about" className="nav-link" role="menuitem" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                    <a href="#projects" className="nav-link" role="menuitem" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                    <a href="#skills" className="nav-link" role="menuitem" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
                    <a href="#certifications" className="nav-link" role="menuitem" onClick={(e) => handleNavClick(e, '#certifications')}>Certifications</a>
                    <a href="#education" className="nav-link" role="menuitem" onClick={(e) => handleNavClick(e, '#education')}>Education</a>
                    <a href="#contact" className="nav-link" role="menuitem" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>

                    {/* Theme toggle */}
                    <button
                        className="theme-toggle"
                        onClick={() => setIsDark(!isDark)}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={isDark ? 'Light mode' : 'Dark mode'}
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
