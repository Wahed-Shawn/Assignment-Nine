import React from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ConsultationForm = () => {

    const handleForm = e => {
        e.preventDefault()
        toast.success('Email sent.')
        e.target.reset()
    }

    return (
        <div className="w-full p-6 border border-gray-300 shadow-xl rounded-2xl sticky top-[4.5rem]">
            <div className="card-body bg-white rounded-2xl">
                <h1 className="text-4xl font-bold">Book a Consultation</h1>
                <p className='text-gray-500 mb-3 font-semibold'>Need help picking the perfect spot? Our experts can help you.</p>
                <form onSubmit={handleForm} className="fieldset">
                    <label className="label text-black/80 font-bold text-lg">Name</label>
                    <input type="text" required className="input w-full bg-green-100/60" placeholder="Name" />
                    <label className="label text-black/80 font-bold text-lg">Email</label>
                    <input type="email" required className="input w-full bg-green-100/60" placeholder="Email" />
                    <button className="btn  bg-[#0FBD0F] mt-4 text-white text-lg py-6"><FaRegCalendarCheck size={24} /> Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default ConsultationForm;