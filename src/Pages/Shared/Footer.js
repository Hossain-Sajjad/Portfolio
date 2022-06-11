import React from 'react';
import github from '../../../src/images/logo/github.png'
import linkedin from '../../../src/images/logo/linkedin.png'

const Footer = () => {
    return (
        <div className='bg-[#010101]'>
            <footer class="footer footer-center p-10 text-base-content rounded">
                <div>
                    <div class="grid grid-flow-col gap-4">
                        <a href='https://github.com/Hossain-Sajjad' target='_blank' rel="noreferrer"><div class="avatar">
                            <div class="w-8 rounded-full">
                                <img src={github} alt='' />
                            </div>
                        </div></a>
                        <a href='https://www.linkedin.com/in/hossain-sajjad-41b5ba241/' target='_blank' rel="noreferrer"><div class="avatar">
                            <div class="w-8 rounded-full">
                                <img src={linkedin} alt='' />
                            </div>
                        </div></a>
                        <a href='https://www.facebook.com/profile.php?id=100004873998766' target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" className='text-white'></path></svg></a>
                    </div>
                </div>
                <div>
                    <small>Copyright © 2022 - All right reserved by Hossain Sajjad</small>
                </div>
            </footer>
        </div>
    );
};

export default Footer;