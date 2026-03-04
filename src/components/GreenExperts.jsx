import React from 'react';

const GreenExperts = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-semibold md:text-3xl'>Meet Our Green Experts</h1>
            <p className='text-center mt-1.5 text-sm text-gray-500 md:text-[1rem]'>The hearts and hands behind our botanical family.</p>

            <div className="mt-12 grid grid-cols-1 gap-4 justify-items-center md:md:grid-cols-4 md:gap-0">
                <div className="w-[15rem] flex flex-col">
                    <div className="h-[16rem] w-[15rem] rounded-3xl overflow-hidden">
                        <img className='h-full w-full object-top object-cover' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <h3 className='text-center text-lg font-bold mt-3'>Oliver Green</h3>
                    <p className='text-center text-sm font-semibold text-gray-500'>Head Botanist</p>
                </div>
                <div className="w-[15rem] flex flex-col">
                    <div className="h-[16rem] w-[15rem] rounded-3xl overflow-hidden">
                        <img className='h-full w-full object-top object-cover' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <h3 className='text-center text-lg font-bold mt-3'>Lily Bloom</h3>
                    <p className='text-center text-sm font-semibold text-gray-500'>Succulent Specialist</p>
                </div>
                <div className="w-[15rem] flex flex-col">
                    <div className="h-[16rem] w-[15rem] rounded-3xl overflow-hidden">
                        <img className='h-full w-full object-top object-cover' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <h3 className='text-center text-lg font-bold mt-3'>Marcus Leaf</h3>
                    <p className='text-center text-sm font-semibold text-gray-500'>Tropical Expert</p>
                </div>
                <div className="w-[15rem] flex flex-col">
                    <div className="h-[16rem] w-[15rem] rounded-3xl overflow-hidden">
                        <img className='h-full w-full object-top object-cover' src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <h3 className='text-center text-lg font-bold mt-3'>Sarah Fern</h3>
                    <p className='text-center text-sm font-semibold text-gray-500'>Nursery Manager</p>
                </div>
            </div>
        </div>
    );
};

export default GreenExperts;