import React, { useState } from 'react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            categories: ['fullstack', 'ai'],
            icon: 'fa-hospital-user',
            chips: ['Full‑Stack', 'AI'],
            title: 'CureQueue — Real‑time Queues & Appointments',
            description: 'Full‑stack platform for patient queue visibility, doctor availability and online bookings with ML‑based predictive wait times. Real‑time updates via Firebase & WebSockets.',
            tech: ['Reactjs', 'Nodejs', 'MongoDB', 'nodemailer'],
            link: 'https://cure-queue-cyan.vercel.app/'
        },
        {
            id: 2,
            categories: ['fullstack'],
            icon: 'fa-shirt',
            chips: ['E‑commerce'],
            title: 'GlamRents — Apparel Rental Marketplace',
            description: 'End‑to‑end rental marketplace with secure order management, deposits, delivery & cleaning services, and subscription options. Mobile‑first, sustainability‑focused UX.',
            tech: ['React', 'Node', 'UI/UX']
        },
        {
            id: 3,
            categories: ['data', 'ai'],
            icon: 'fa-chart-column',
            chips: ['Analytics'],
            title: 'Data Analytics & Visualization',
            description: 'Dashboards and insights with Power BI and Python—turning raw data into decisions. Includes forecasting, segmentation and KPI monitoring.',
            tech: ['Power BI', 'Python', 'Excel']
        },
        {
            id: 4,
            categories: ['fullstack', 'ai'],
            icon: 'fa-heartbeat',
            chips: ['MERN Stack', 'Generative AI'],
            title: 'AI-Powered Healthcare Diagnosis Platform',
            year: '2025',
            description: 'Developed an AI-driven healthcare platform that analyzes user symptoms and provides possible medical insights using generative AI models. Built with MongoDB, Express.js, React.js, and Node.js integrated with Python-based AI services. Implemented intelligent symptom analysis and chatbot-style interaction to assist users in preliminary health assessment.',
            tech: ['MERN Stack', 'Generative AI', 'Python']
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.categories.includes(activeFilter));

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Selected work across AI/ML and full‑stack development.</p>
                </header>

                <div className="project-filters">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('ai')}
                    >
                        AI/ML
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('fullstack')}
                    >
                        Full‑Stack
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'data' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('data')}
                    >
                        Data
                    </button>
                </div>

                <div className="grid projects-grid">
                    {filteredProjects.map((project) => {
                        const ProjectCard = (
                            <>
                                <div className="thumb">
                                    <i className={`fa-solid ${project.icon}`}></i>
                                </div>
                                <div className="body">
                                    <div className="meta">
                                        {project.chips.map((chip, idx) => (
                                            <span key={idx} className="chip">{chip}</span>
                                        ))}
                                    </div>
                                    <h3 className="card-title">{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        );

                        return project.link ? (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card project project-link"
                                data-cat={project.categories.join(' ')}
                            >
                                {ProjectCard}
                            </a>
                        ) : (
                            <article
                                key={project.id}
                                className="card project"
                                data-cat={project.categories.join(' ')}
                            >
                                {ProjectCard}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
