import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
    }

    return (
        <div className="container mx-auto min-h-screen">
            <div className="card bg-[#F6F8F6] w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-2xl font-bold text-center">Join <span className='text-[#14d114]'>GreenNest</span></h1>
                    <p className='text-gray-400 mb-4 text-center'>Create an account to start your plant journey</p>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4 bg-[#0FBD0F] border-0 text-white">Register</button>
                    </fieldset>
                    <p className='font-semibold'>Already have an account? Please <Link to='/login' className='text-blue-500 hover:underline hover:text-blue-700'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;