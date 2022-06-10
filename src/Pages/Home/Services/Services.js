import React from 'react';

const Services = () => {
    return (
        <div className='bg-[#010101]'>
            <div className='lg:mx-12'>
                <h3 className='text-center text-2xl font-semibold mb-4'>What I Do?</h3>
                <h3 className='text-center text-xl text-primary mb-12'>My regular services</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
                    <div class="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnI3sD_rkvV-vJzto3xyftE-MDVATWczuTHg&usqp=CAU" className='w-full' alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Plain HTML and CSS responsive website</h2>
                            <p>I can develop pixel perfect fully responsive websites with HTML and CSS from provided figma design.</p>
                            <div class="card-actions">
                                <button class="btn btn-outline btn-primary btn-sm">HTML</button>
                                <button class="btn btn-outline btn-primary btn-sm">CSS</button>
                                <button class="btn btn-outline btn-primary btn-sm">JavaScript</button>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEVa57a2-t6RbrEpwJlvXRN9faQG_rG_9og&usqp=CAU" className='w-full' alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">SPA with React</h2>
                            <p>I can develop fast and fully responsive single page React web apps with routing(protected and nested), authentication etc.</p>
                            <div class="card-actions">
                                <button class="btn btn-outline btn-primary btn-sm">React</button>
                                <button class="btn btn-outline btn-primary btn-sm">JavaScript</button>
                                <button class="btn btn-outline btn-primary btn-sm">Firebase</button>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VIYNkS-Hsk6R7hChTDyUq3Q_D2-IsR-JvQ&usqp=CAU" className='w-full' alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">MERN stack web application</h2>
                            <p>I can develop a full stack web app using MongoDB, Express, React and Node. With authorization features like JWT, admin role, payment system etc.</p>
                            <div class="card-actions">
                                <button class="btn btn-outline btn-primary btn-xs">MongoDB</button>
                                <button class="btn btn-outline btn-primary btn-xs">Express</button>
                                <button class="btn btn-outline btn-primary btn-xs">React</button>
                                <button class="btn btn-outline btn-primary btn-xs">Node</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;