import React from 'react';

const DecorIdeas = () => {
    return (
        <div className='mt-[5rem]'>
            <h1 className='text-center text-3xl font-semibold text-black/80'>Inspired Living</h1>
            <p className='text-center text-gray-600 mt-1.5 mb-9'>Glimpses into how our community creates their green haven.</p>

            <div className="h-[28rem] grid grid-cols-12 gap-8">
                <div className="bg-amber-500 h-[28rem] w-full col-span-6 rounded-3xl overflow-hidden">
                    <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=891&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className="h-[28rem] col-span-6 grid grid-cols-12 grid-rows-12 gap-5">
                    <div className="bg-green-600 col-span-6 row-span-5 rounded-2xl overflow-hidden">
                        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1766300289687-84aef205da4c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
                    </div>
                    <div className="col-span-6 row-span-5 rounded-2xl overflow-hidden">
                        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1525247862234-30193931fdf7?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="h-full col-span-12 row-span-7 rounded-3xl overflow-hidden">
                        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1611866972879-3f7c79e1282d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DecorIdeas;