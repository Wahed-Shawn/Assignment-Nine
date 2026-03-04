import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import UpdateProfile from '../components/UpdateProfile';

const MyProfile = () => {
    const{user} = use(AuthContext)

    return (
        <div className='w-[60%] mx-auto space-y-8'>
            <div className="h-[14rem] border border-gray-300 rounded-2xl overflow-hidden">
                <div className="bg-blue-300 h-[40%]"></div>
                <div className="bg-white h-[60%] relative">
                    <div className="absolute -top-[35%] left-[2.5rem] w-[70%] flex gap-7">
                        <div className="h-[9rem] w-[9rem] bg-blue-700 rounded-full">
                            <img src={user.photoURL} className='h-full w-full rounded-full object-cover' />
                        </div>
                        <div className="self-end space-y-2 pb-3">
                            <h1 className='text-2xl font-bold text-black/85'>{user.displayName}</h1>
                            <p className='text-lg font-semibold text-gray-500'>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <UpdateProfile />
            </div>
        </div>
    );
};

export default MyProfile;