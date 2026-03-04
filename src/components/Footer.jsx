import React from 'react';
import logoImg from '../assets/logo.png'
import { FaFacebookSquare, FaInstagram, FaPinterestSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-[5rem] text-white">
            <footer className="footer grid grid-cols-1 md:grid-cols-4 container mx-auto  bg-[#2D3E2D] py-10 px-4">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Stay Connected With Us</h6>
                    <fieldset className="">
                        <label>Enter your email address</label>
                        <div className="join text-black">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer bg-[#2D3E2D] container mx-auto border-gray-400 border-t px-4 py-4">
                <aside className="grid-flow-col items-center">
                    <div className="text-white ">
                        <div className='flex items-center'>
                            <img src={logoImg} className='h-[3rem]' />
                            <span className='font-bold text-4xl'>GreenNest</span>
                        </div>
                        <p className='text-gray-300'>© 2025 GreenNest. All rights reserved.</p>
                    </div>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col justify-items-center gap-4">
                        <FaInstagram size={30} />
                        <FaFacebookSquare size={30} />
                        <FaPinterestSquare size={30} />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;