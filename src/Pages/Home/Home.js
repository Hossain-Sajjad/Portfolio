import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import TopSection from './TopSection/TopSection';

const Home = () => {
    return (
        <div className='bg-[#010101]'>
            <TopSection></TopSection>
            <Services></Services>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;