import React from 'react';

const internships = [
    {
        role: 'Java Full Stack Developer',
        company: 'Tap Academy',
        duration: 'Jan 2026 – Present',
        type: 'Internship',
        points: [
            'Gained hands-on experience in Core Java, Advanced Java, Spring, Hibernate, React, and MySQL while building full-stack web applications.',
            'Developed and deployed multiple full-stack projects, implementing backend APIs, database integration, and responsive frontend interfaces.'
        ],
        tech: ['Core Java', 'Spring', 'Hibernate', 'React', 'MySQL']
    }
];

const Internship = () => {
    return (
        <section className="internship section" id="internship">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Internship</h2>
                    <p className="section-subtitle">Real-world experience and hands-on development.</p>
                </header>

                <div className="internship-list">
                    {internships.map((item, idx) => (
                        <div key={idx} className="internship-card glass">
                            {/* Left accent bar */}
                            <div className="internship-accent"></div>

                            <div className="internship-body">
                                {/* Header row */}
                                <div className="internship-header">
                                    <div className="internship-title-group">
                                        <span className="internship-badge">
                                            <i className="fa-solid fa-briefcase"></i> {item.type}
                                        </span>
                                        <h3 className="internship-role">{item.role}</h3>
                                        <p className="internship-company">
                                            <i className="fa-solid fa-building"></i> {item.company}
                                        </p>
                                    </div>
                                    <span className="internship-duration">
                                        <i className="fa-regular fa-calendar"></i> {item.duration}
                                    </span>
                                </div>

                                {/* Bullet points */}
                                <ul className="internship-points">
                                    {item.points.map((pt, i) => (
                                        <li key={i}>
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech tags */}
                                <div className="internship-tech">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="chip">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internship;
