import React, { useEffect, useRef } from 'react';

const About = () => {
    const statsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = parseFloat(entry.target.dataset.target);
                        const isFloat = String(target).includes('.');
                        const duration = 1200;
                        const startTime = performance.now();

                        const animate = (currentTime) => {
                            const progress = Math.min(1, (currentTime - startTime) / duration);
                            const value = target * progress;
                            entry.target.textContent = isFloat ? value.toFixed(2) : Math.floor(value);
                            if (progress < 1) requestAnimationFrame(animate);
                        };

                        requestAnimationFrame(animate);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        statsRef.current.forEach((stat) => {
            if (stat) observer.observe(stat);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about section" id="about">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Building with code, guided by data, powered by AI.</p>
                </header>

                <div className="about-grid">
                    <div className="about-copy glass">
                        <h3>Computer Science & Engineering (B.E.)</h3>
                        <p>
                            Motivated and detail-oriented engineering student with strong skills in web development, data analysis,
                            machine learning, UI/UX design, and AI research. I build scalable applications and data-driven solutions
                            to enhance business and user outcomes. Active hackathon participant and team collaborator.
                        </p>
                        <ul className="about-points">
                            <li><i className="fa-solid fa-bolt"></i> Real-time systems with Firebase & WebSockets</li>
                            <li><i className="fa-solid fa-layer-group"></i> Full‑stack: React / Node / Django</li>
                            <li><i className="fa-solid fa-chart-line"></i> ML models & visual analytics (Power BI, Excel)</li>
                        </ul>
                        <div className="stats">
                            <div className="stat">
                                <span className="num text-stat">Fresher</span>
                                <span className="label">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="num text-stat">10+</span>
                                <span className="label">Projects</span>
                            </div>
                            <div className="stat">
                                <span className="num" data-target="92" ref={(el) => (statsRef.current[2] = el)}>0</span>
                                <span className="label">ML Acc. %</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-cards">
                        <div className="highlight glass">
                            <div className="icon"><i className="fa-solid fa-trophy"></i></div>
                            <div>
                                <h4>Hackathons</h4>
                                <p>Active participant and team lead across multiple 24‑hr hackathons.</p>
                            </div>
                        </div>
                        <div className="highlight glass">
                            <div className="icon"><i className="fa-solid fa-certificate"></i></div>
                            <div>
                                <h4>Certified & Skilled</h4>
                                <p>One Roadmap, HP LIFE, Deloitte, Mastercard Forage, Google, TATA, etc.</p>
                            </div>
                        </div>
                        <div className="highlight glass">
                            <div className="icon"><i className="fa-solid fa-people-group"></i></div>
                            <div>
                                <h4>Collaboration</h4>
                                <p>Comfortable leading teams, mentoring peers, and shipping features fast.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
