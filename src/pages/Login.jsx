import React, { use, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Login = () => {
    const { logInUser, setUser, googleSignIn, resetPassword } = use(AuthContext)
    const [show, setShow] = useState(false)

    const emailRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

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
                navigate(location.state || '/')
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
                navigate(location.state || '/')
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })
    }

    const handleForgotPassword = () => {
        resetPassword(emailRef.current.value)
        toast.info('Please check your email to reset password')
        console.log(emailRef.current.value)
    }

    return (
        <div className="container mx-auto min-h-screen">
            <div className="card bg-[#F6F8F6] w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl text-center font-bold">Welcome Back</h1>
                    <p className='text-gray-400 text-center mb-4'>Please enter your details to login</p>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={show ? 'text' : 'password'} name='password' className="input pr-[2.5rem]" placeholder="Password" />
                            <div onClick={() => setShow(!show)} className='absolute top-1/2 right-[2rem] -translate-y-1/2 cursor-pointer z-10'>
                                {show ? <IoEye size={18} /> : <IoEyeOff size={18} />}
                            </div>
                        </div>
                        <div><a onClick={handleForgotPassword} className="link link-hover">Forgot password?</a></div>
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