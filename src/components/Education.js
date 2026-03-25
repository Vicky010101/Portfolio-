import React from 'react';

const Education = () => {
    const education = [
        {
            degree: 'B.E. — Computer Science & Engineering',
            institution: 'Maratha Mandal\'s Engineering College, Belagavi',
            date: 'Nov 2022 – Present',
            score: 'CGPA: 8.2'
        },
        {
            degree: 'PUC — Science (PCM)',
            institution: 'Maratha Mandal PU Integrated College, Belagavi',
            date: 'Jun 2020 – Mar 2022',
            score: 'Percentage: 60.86%'
        },
        {
            degree: '10th — CBSE Equivalent',
            institution: 'Model English Medium School, Belagavi',
            date: 'Jun 2010 – Mar 2020',
            score: 'Percentage: 65.73%'
        }
    ];

    return (
        <section className="education section" id="education">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">Academic background and foundations.</p>
                </header>
                <div className="timeline">
                    {education.map((edu, idx) => (
                        <div key={idx} className="t-item">
                            <div className="t-dot"></div>
                            <div className="t-content glass">
                                <h3>{edu.degree}</h3>
                                <p>{edu.institution}</p>
                                <span className="t-date">{edu.date}</span>
                                {edu.score && <span className="t-score">{edu.score}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
