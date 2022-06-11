import React from 'react';
import './TopSection.css'
import resume from '../../../resume/Resume_HossainSajjad.pdf'
import { Typewriter } from 'react-simple-typewriter'

const TopSection = () => {
    return (
        <div className=''>
            <div className="hero bg-base-200 top-section pb-12 lg:py-16">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse w-screen">
                    <div className='lg:ml-28'>
                        <h1 className="text-5xl uppercase">I'M Hossain Sajjad</h1>
                        <span className='text-primary'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Repeat!', 'hello']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <p className="text-3xl py-6 uppercaseyarn add react-simple-typewriter">WEB DEVELOPER | React Developer</p>
                        <a href={resume} download className="btn btn-primary text-white">Download Resume</a>
                    </div>
                    <div class="avatar">
                        <div class="w-72 lg:w-96 mb-4 rounded-full">
                            <img src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.6435-9/107830454_1514329778739474_3775876950472275208_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGZg99ID6HBdMhl0qw5b3FJJMTj5n5Js_okxOPmfkmz-urWUxc_N24vNCPE9zPWpJfvmBmRF3PUm0c8frUsEbVi&_nc_ohc=2884MlXKz68AX8FAxHt&_nc_ht=scontent.fcgp27-1.fna&oh=00_AT-5c0CAc1ZgmrSTa8clU02cP5R31-Bvxv0maAQJ3vpiRA&oe=62C70879" alt='' className="max-w-sm rounded-lg shadow-2xl top-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;