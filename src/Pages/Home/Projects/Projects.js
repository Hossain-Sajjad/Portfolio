import React from 'react';
import Project1 from '../../../images/p-1.png'
import Project2 from '../../../images/p-2.png'
import Project3 from '../../../images/p-3.png'

const Projects = () => {
    return (
        <div className='bg-[#010101]'>
            <div className='lg:mx-12 pt-24'>
                <h3 className='text-center text-2xl font-semibold mb-12'>My Projects</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
                    <div class="card w-96 bg-base-100 shadow-xl image-full" data-aos="zoom-in-right">
                        <figure><img src={Project1} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Hossain Manufacturing</h2>
                            <p>A mern stack Project.</p>
                            <div class="card-actions justify-end">
                                <a href='https://hossain-manufacturing.web.app/' target='_blank' rel="noreferrer" class="btn btn-outline btn-primary btn-sm">Visit Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl image-full" data-aos="zoom-in-up">
                        <figure><img src={Project3} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Event Management</h2>
                            <p>Raw html project used Bootstrap.</p>
                            <div class="card-actions justify-end">
                                <a href='https://epigram-event-management.netlify.app/' target='_blank' rel="noreferrer" class="btn btn-outline btn-primary btn-sm">Visit Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl image-full" data-aos="zoom-in-left">
                        <figure><img src={Project2} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Hossain Electronics</h2>
                            <p>A Full Stack Inventory Project.</p>
                            <div class="card-actions justify-end">
                                <a href='https://hossain-electronics.web.app/' target='_blank' rel="noreferrer" class="btn btn-outline btn-primary btn-sm">Visit Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;