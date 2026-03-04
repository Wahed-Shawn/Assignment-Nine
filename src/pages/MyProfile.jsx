import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import UpdateProfile from '../components/UpdateProfile';

const MyProfile = () => {
    const{user} = use(AuthContext)

    return (
        <div className='w-full px-3 mx-auto space-y-8 md:w-[60%] md:px-0'>
            <div className="h-[20rem] border border-gray-300 rounded-2xl overflow-hidden md:h-[14rem]">
                <div className="bg-blue-300 h-[40%]"></div>
                <div className="bg-white h-[60%] relative">
                    <div className="absolute -top-[25%] right-1/2 translate-x-1/2  lg:-top-[35%] lg:translate-x-0 lg:left-[2.5rem] lg:w-[70%] md:flex md:gap-4 lg:gap-7">
                        <div className="h-[8rem] w-[8rem] md:h-[9rem] md:w-[9rem] bg-blue-700 rounded-full">
                            <img src={user.photoURL} className='h-full w-full rounded-full object-cover' />
                        </div>
                        <div className="md:self-end space-y-2 md:pb-3">
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