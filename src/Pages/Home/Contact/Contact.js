import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zks8wjh', 'template_3t63z0u', form.current, 'XQMtjZ2zckXJZNmeX')
            .then((result) => {
                toast.success("Massage sent successfully!");
            }, (error) => {
                toast.error("Failed to sent massage!");
            });
        e.target.reset();
    };

    return (
        <div id='contact-section' className="hero min-h-screen bg-[#010101]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:ml-32">
                    <h1 class="text-5xl font-bold">Contact now!</h1>
                    <p class="py-6 text-primary">Massage me directly if you have any type of query or want to say anything.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#f5f5f5]" data-aos="flip-left">
                    <div class="card-body">
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-primary font-bold">Name</span>
                                </label>
                                <input type="text" name="from_name" placeholder="name" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-primary font-bold">Email</span>
                                </label>
                                <input type="text" name="from_email" placeholder="email" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-primary font-bold">Massage</span>
                                </label>
                                <textarea type="text" name="message" placeholder="massage" class="input input-bordered" required />
                            </div>
                            <div class="form-control mt-6">
                                <input type="submit" value="Send" className='btn btn-primary text-white font-bold' />
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;