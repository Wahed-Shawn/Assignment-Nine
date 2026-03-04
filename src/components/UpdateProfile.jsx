import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const { updateProfileFunc } = use(AuthContext)

    const handleUpdateProfile = e => {
        // e.preventDefault()
        const displayName = e.target.name.value
        const photoURL = e.target.photoUrl.value
        console.log(displayName,photoURL,'clicked')

        updateProfileFunc({
            displayName,
            photoURL
        }).then(() => {
            toast.success('Profile Updated')
        }).catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <div className='border p-8 border-gray-300 rounded-2xl'>
            <div className="card-body p-0">
                <h1 className="text-3xl font-bold mb-2 text-black/80">Update Profile</h1>
                <form onSubmit={handleUpdateProfile} className="fieldset flex flex-col">
                    <div className="flex items-center justify-between gap-5">
                        <div className="w-full">
                            <label className="label text-black/70 font-semibold text-lg mb-3">Update Name</label>
                            <input type="text" name='name' className="input w-full h-[3rem]" placeholder="Name" />
                        </div>
                        <div className="w-full">
                            <label className="label text-black/70 font-semibold text-lg mb-3">Update Photo URL</label>
                            <input type="text" name='photoUrl' className="input w-full h-[3rem]" placeholder="Photo URL" />
                        </div>
                    </div>
                    <textarea rows={7} className="textarea w-full mt-[2rem]" placeholder="Bio"></textarea>
                    <button type='submit' className="btn btn-neutral bg-[#0FBD0F] border-0 text-white mt-4 self-end">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;