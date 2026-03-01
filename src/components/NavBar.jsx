import React, { use } from 'react';
import logoImg from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const NavBar = () => {
    const { user } = use(AuthContext)

    const links = <>
        <li><NavLink to='/' className={'font-semibold text-lg'}>Home</NavLink></li>
        <li><NavLink to='/plants' className={'font-semibold text-lg'}>Plants</NavLink></li>
        <li><NavLink to='/myProfile' className={'font-semibold text-lg'}>My Profile</NavLink></li>
    </>

    return (
        <div className='shadow-sm fixed top-0 left-0 w-full z-50'>
            <div className="navbar bg-base-100 px-0 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-[#0FBD0F] font-bold text-3xl flex items-center">
                        <img src={logoImg} className='h-[2.5rem]' />
                        <span>GreenNest</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (<div className='h-[3.8rem] w-[3.8rem] rounded-full'>
                            <button className="btn h-full w-full rounded-full p-0" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                                <img src="https://lh3.googleusercontent.com/a/ACg8ocJgmUgqp6xhMe9o36I7rzZsxoWGSgQizVNy92pFWoyXo0F5jfQ=s400-c" className='h-full w-full rounded-full object-cover' />
                            </button>

                            <ul className="dropdown menu w-fit rounded-box bg-base-100 shadow-sm space-y-2.5"
                                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                                <li className='text-center font-bold text-lg'>{user.displayName}</li>
                                <li className='text-center font-semibold'>{user.email}</li>
                                <li><button className='btn btn-outline btn-error hover:text-white text-lg'>log Out</button></li>
                            </ul>
                        </div>) : <div className='space-x-3.5'>
                            <Link to='/login' className="btn bg-[#cef7ce] text-green-600 border-0">Login</Link>
                            <Link to='/register' className="btn bg-[#0FBD0F] text-white border-0">Register</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;