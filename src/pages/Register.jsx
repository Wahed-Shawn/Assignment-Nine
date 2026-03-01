import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        console.log({ email, password })

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Registration succesful')
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })
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
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4 bg-[#0FBD0F] border-0 text-white">Register</button>
                    </fieldset>
                    <p className='font-semibold'>Already have an account? Please <Link to='/login' className='text-blue-500 hover:underline hover:text-blue-700'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;