import React from 'react';

const Skills = () => {
    return (
        <div className='bg-[#010101] pt-8'>
            <h3 className='text-center text-2xl font-semibold py-8'>My Skills</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='mx-16'>
                    <div className='mb-4'>
                        <h4 className='font-semibold'>HTML 5</h4>
                        <progress class="progress progress-primary w-64 bg-white lg:w-[500px]" value="70" max="100"></progress>
                    </div>
                    <div className='mb-4'>
                        <h4 className=''>CSS 3</h4>
                        <progress class="progress progress-primary w-64 bg-white lg:w-[500px]" value="75" max="100"></progress>
                    </div>
                    <div className='mb-4'>
                        <h4 className=''>JAVASCRIPT</h4>
                        <progress class="progress progress-primary w-64 bg-white lg:w-[500px]" value="70" max="100"></progress>
                    </div>
                    <div className='mb-4'>
                        <h4 className=''>REACT JS</h4>
                        <progress class="progress progress-primary w-64 bg-white lg:w-[500px]" value="78" max="100"></progress>
                    </div>
                </div>
                <div className='mx-16'>
                    <div className='mb-4'>
                        <h4 className=''>MONGODB</h4>
                        <progress class="progress progress-primary w-64 bg-white lg:w-[500px]" value="65" max="100"></progress>
                    </div>
                    <div className='mb-4'>
                        <h4 className=''>NODE JS (EXPRESS JS )</h4>
                        <progress class="progress progress-primary w-64 bg-white lg:w-[500px]" value="60" max="100"></progress>
                    </div>
                    <div className='mb-4'>
                        <h4 className=''>REST API</h4>
                        <progress class="progress progress-primary w-64 bg-white lg:w-[500px]" value="60" max="100"></progress>
                    </div>
                    <div className='mb-4'>
                        <h4 className=''>PROBLEM SOLVING</h4>
                        <progress class="progress progress-primary w-64 bg-white lg:w-[500px]" value="75" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;