import React from 'react';
import resume from '../../resume/Resume_HossainSajjad.pdf'

const Navbar = () => {
    return (
        <div className="navbar uppercase bg-[#010101]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Projects</a></li>
                        <li><a href='#contact-section'>Contact</a></li>
                        <li><a href='#about-section'>About</a></li>
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl lg:hidden">HS</a>
                <a href='/' className="btn btn-ghost normal-case text-xl hidden lg:flex">HOSSAIN SAJJAD</a>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Projects</a></li>
                        <li><a href='#contact-section'>Contact</a></li>
                        <li><a href='#about-section'>About</a></li>
                    </ul>
                </div>
                <a href={resume} download className="btn btn-primary text-white lg:hidden">Resume</a>
                <a href={resume} download className="btn btn-primary text-white hidden lg:flex">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;