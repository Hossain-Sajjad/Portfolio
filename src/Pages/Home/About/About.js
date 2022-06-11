import React from 'react';
import Img from '../../../images/about-png.png'

const About = () => {
    return (
        <div id='about-section' class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="avatar">
                    <div class="ring ring-primary rounded-xl ring-offset-base-100 ring-offset-2">
                        <img src={Img} class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
                <div>
                    <h1 class="text-5xl text-primary">About Me</h1>
                    <p class="py-4">I'm a proffessional frontend website developer with innovative mindset. I work with todays most popular Javascript library React Js for frontend developement. I love to explore various technologies and curious about them.</p>
                    <p class="py-4">I'm a proffessional frontend website developer with innovative mindset. I work with todays most popular Javascript library React Js for frontend developement. I love to explore various technologies and curious about them.</p>
                </div>
            </div>
        </div>
    );
};

export default About;