import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { logInUser, setUser, googleSignIn } = use(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        console.log({ email, password })

        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Login succesful')
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })
    }

    const handleGoogleSIgnIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                toast.success('Login succesful')
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })
    }

    return (
        <div className="container mx-auto min-h-screen">
            <div className="card bg-[#F6F8F6] w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl text-center font-bold">Welcome Back</h1>
                    <p className='text-gray-400 text-center mb-4'>Please enter your details to login</p>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 bg-[#0FBD0F] border-0 text-white">Login</button>
                    </fieldset>

                    <p className='font-semibold'>Don't have an account? Please <Link to='/register' className='text-blue-500 hover:underline hover:text-blue-700'>Register</Link></p>
                    <div className="flex items-center justify-center gap-3.5">
                        <div className="w-[3rem] h-px border border-gray-500"></div>
                        <span>or</span>
                        <div className="w-[3rem] h-px border border-gray-500"></div>
                    </div>
                    <button onClick={handleGoogleSIgnIn} type='button' className="btn btn-outline btn-info hover:text-white text-black">
                        <FcGoogle size={22} />
                        Login with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;