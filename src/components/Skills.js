import React, { useEffect, useRef } from 'react';

const Skills = () => {
    const barsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const level = entry.target.getAttribute('data-level');
                        const inner = document.createElement('div');
                        inner.style.height = '100%';
                        inner.style.width = '0';
                        inner.style.background = 'linear-gradient(90deg, var(--accent), var(--accent-2))';
                        inner.style.borderRadius = '999px';
                        inner.style.transition = 'width 1.2s ease';
                        entry.target.appendChild(inner);
                        requestAnimationFrame(() => {
                            inner.style.width = level + '%';
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        barsRef.current.forEach((bar) => {
            if (bar) observer.observe(bar);
        });

        return () => observer.disconnect();
    }, []);

    const skills = [
        {
            icon: 'fa-code',
            title: 'Programming',
            tags: ['Python', 'JavaScript', 'SQL', 'C++'],
            bars: [
                { name: 'Python', level: 92 },
                { name: 'JavaScript', level: 88 },
                { name: 'SQL', level: 85 },
                { name: 'C++', level: 80 }
            ]
        },
        {
            icon: 'fa-globe',
            title: 'Web',
            tags: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Django'],
            bars: [
                { name: 'React.js', level: 88 },
                { name: 'Node.js', level: 84 },
                { name: 'Django', level: 82 }
            ]
        },
        {
            icon: 'fa-brain',
            title: 'AI / Data',
            tags: ['Machine Learning', 'Data Viz', 'Power BI', 'Excel'],
            bars: [
                { name: 'Machine Learning', level: 90 },
                { name: 'Data Visualization', level: 86 },
                { name: 'Power BI', level: 82 }
            ]
        },
        {
            icon: 'fa-screwdriver-wrench',
            title: 'Tools & DevOps',
            tags: ['Git', 'Jenkins', 'VS Code', 'Firebase', 'WebSockets'],
            bars: []
        }
    ];

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">A quick snapshot of tools I use to ship.</p>
                </header>

                <div className="skills-grid">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="skill-card glass">
                            <div className="skill-top">
                                <i className={`fa-solid ${skill.icon}`}></i>
                                <h3>{skill.title}</h3>
                            </div>
                            <ul className="skill-tags">
                                {skill.tags.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                ))}
                            </ul>
                            {skill.bars.length > 0 && (
                                <div className="bars">
                                    {skill.bars.map((bar, i) => (
                                        <div key={i} className="bar">
                                            <span>{bar.name}</span>
                                            <div
                                                className="bar-fill"
                                                data-level={bar.level}
                                                ref={(el) => (barsRef.current[idx * 10 + i] = el)}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
