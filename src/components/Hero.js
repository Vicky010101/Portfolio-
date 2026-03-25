import React, { useState, useEffect } from 'react';

const Hero = () => {
    const roles = ['Aspiring Engineer', 'Java Fullstack Developer'];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2200);
        return () => clearInterval(interval);
    }, [roles.length]);

    const handleScrollClick = (e, id) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className="hero section" id="home">
            <div className="hero-inner container">
                <div className="hero-left">
                    <p className="eyebrow">Hello, I'm</p>
                    <h1 className="title">Vikas <span className="accent">Hanamant</span> Rathod</h1>
                    <h2 className="subtitle"><span id="typing">{roles[currentRole]}</span></h2>
                    <p className="lead">
                        I design and build scalable apps and data-driven solutions that improve real-world outcomes.
                    </p>
                    <div className="hero-ctas">
                        <a href="#projects" className="btn btn-primary" onClick={(e) => handleScrollClick(e, '#projects')}>
                            <i className="fa-solid fa-rocket-launch"></i> View My Work
                        </a>
                        <a href="#contact" className="btn btn-outline" onClick={(e) => handleScrollClick(e, '#contact')}>
                            <i className="fa-solid fa-paper-plane"></i> Get in Touch
                        </a>
                        <a href="/assets/resume.pdf" download className="btn btn-outline">
                            <i className="fa-solid fa-download"></i> Download Resume
                        </a>
                    </div>
                    <div className="socials">
                        <a href="mailto:vrathod07913@gmail.com" aria-label="Email">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                        <a href="https://linkedin.com/in/vikas-rathod-047496261" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/Vicky010101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/call_me_vicky_0101?igsh=MWczbXBkYnB3ZnluZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="avatar-wrap neon">
                        <img src="/images/svg.png" alt="Portrait of Vikas Hanamant Rathod" className="avatar" />
                        <div className="orbit o1"><i className="fab fa-python"></i></div>
                        <div className="orbit o2"><i className="fab fa-react"></i></div>
                        <div className="orbit o3"><i className="fa-solid fa-brain"></i></div>
                        <div className="orbit o4"><i className="fa-solid fa-database"></i></div>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-indicator" aria-label="Scroll to About" onClick={(e) => handleScrollClick(e, '#about')}>
                <i className="fa-solid fa-angles-down"></i>
            </a>
        </header>
    );
};

export default Hero;
