import React from 'react';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import TopSection from './TopSection/TopSection';

const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;