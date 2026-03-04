import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Register = () => {
    const { createUser, updateProfileFunc } = use(AuthContext)
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const displayName = e.target.name.value
        const photoURL = e.target.photoUrl.value
        const email = e.target.email.value
        const password = e.target.password.value

        // console.log({ name, photoUrl, email, password })

        if (!/[A-Z]/.test(password)) {
            setError('Error: Must have an uppercase letter.')
            return
        }
        else if (!/[a-z]/.test(password)) {
            setError('Error: Must have a lowercase letter.')
            return
        }
        else if (password.length < 6) {
            setError('Error: Length must be at least 6 characters.')
            return
        }

        createUser(email, password)
            .then(result => {
                updateProfileFunc({
                    displayName,
                    photoURL
                })
                // console.log(result.user)
                toast.success('Registration succesful')
                setError('')
                navigate('/')
            })
            .catch(error => {
                // console.log(error.message)
                toast.error(error.message)
            })

        e.target.reset()
    }

    return (
        <div className="container mx-auto min-h-screen">
            <div className="card bg-[#F6F8F6] w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-2xl font-bold text-center">Join <span className='text-[#14d114]'>GreenNest</span></h1>
                    <p className='text-gray-400 mb-4 text-center'>Create an account to start your plant journey</p>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' required className="input" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoUrl' required className="input" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" name='email' required className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={show ? 'text' : 'password'} name='password' className="input pr-[2.5rem]" placeholder="Password" />
                            <div onClick={() => setShow(!show)} className='absolute top-1/2 right-[2rem] -translate-y-1/2 cursor-pointer z-10'>
                                {show ? <IoEye size={18} /> : <IoEyeOff size={18} />}
                            </div>
                        </div>
                        <button className="btn btn-neutral mt-4 bg-[#0FBD0F] border-0 text-white">Register</button>
                    </fieldset>
                    {error && <p className='text-red-600'>{error}</p>}
                    <p className='font-semibold'>Already have an account? Please <Link to='/login' className='text-blue-500 hover:underline hover:text-blue-700'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;