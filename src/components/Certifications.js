import React from 'react';

const Certifications = () => {
    const certifications = [
        { issuer: 'One Roadmap', date: 'Jul 2025', title: 'Data Analyst Certification' },
        { issuer: 'HP LIFE | HP Foundation', date: 'Jul 2025', title: 'Data Science & Analytics' },
        { issuer: 'Deloitte (Forage)', date: 'Jun 2025', title: 'Data Analytics Job Simulation' },
        { issuer: 'Mastercard/NY Jobs CEO Council (Forage)', date: 'Feb 2025', title: 'Cybersecurity Virtual Experience' },
        { issuer: 'Google (Coursera)', date: 'Jan–Feb 2024', title: 'Foundations of Cybersecurity' },
        { issuer: 'TATA (Forage)', date: 'Feb 2025', title: 'Data Visualization: Empowering Business Insights' },
        { issuer: 'Simplilearn SkillUp', date: 'Jan–Feb 2025', title: 'Machine Learning' },
        { issuer: 'OfficeMaster', date: 'Feb 2025', title: 'Power BI Workshop' },
        { issuer: 'upGrad @ MMEC', date: 'Aug 2023', title: 'Web Development Workshop' },
        { issuer: 'Hackathons', date: '2024–2025', title: 'Hack to Future \'24 • Clash of Codes \'24 • Hack to Intern' }
    ];

    return (
        <section className="certs section" id="certifications">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Certifications & Achievements</h2>
                    <p className="section-subtitle">A selection of recent learning and recognition.</p>
                </header>

                <div className="grid cert-grid">
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="card glass">
                            <div className="card-head">
                                <span className="issuer">{cert.issuer}</span>
                                <span className="date">{cert.date}</span>
                            </div>
                            <h3>{cert.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
