import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CursorTrail from './components/CursorTrail';

function App() {
    return (
        <>
            <ParticlesBackground />
            <CursorTrail />
            <Navbar />
            <Hero />
            <About />
            <Internship />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
