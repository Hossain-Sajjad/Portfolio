import React from 'react';
import './TopSection.css'

const TopSection = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200 top-section mt-0 pt-0">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <img src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.6435-9/107830454_1514329778739474_3775876950472275208_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGZg99ID6HBdMhl0qw5b3FJJMTj5n5Js_okxOPmfkmz-urWUxc_N24vNCPE9zPWpJfvmBmRF3PUm0c8frUsEbVi&_nc_ohc=2884MlXKz68AX8FAxHt&_nc_ht=scontent.fcgp27-1.fna&oh=00_AT-5c0CAc1ZgmrSTa8clU02cP5R31-Bvxv0maAQJ3vpiRA&oe=62C70879" alt='' className="max-w-sm rounded-lg shadow-2xl top-img" />
                    <div className='mr-48'>
                        <h1 className="text-5xl uppercase">I'M Hossain Sajjad</h1>
                        <p className="text-3xl py-6">WEB DEVELOPER</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;