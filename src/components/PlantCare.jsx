import React from 'react';
import { GiFertilizerBag } from 'react-icons/gi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { RiSunLine } from 'react-icons/ri';

const PlantCare = () => {
    return (
        <div className='mb-[4rem]'>
            <h1 className='text-center text-2xl font-semibold text-green-700 md:text-3xl'>Plant Care Basics</h1>
            <p className='text-center mt-2 text-sm text-gray-500 md:text-[1rem]'>Nurturing your plants is a meditation. Follow these simple principles to keep your sanctuary thriving.</p>

            <div className="grid grid-cols-1 gap-7 mt-8 md:grid-cols-3">
                <div className="bg-green-200 flex flex-col gap-2 justify-center items-center rounded-2xl h-[14rem] p-4">
                    <div className="bg-white h-[3rem] w-[3rem] rounded-full flex items-center justify-center">
                        <MdOutlineWaterDrop size={30} color='green' />
                    </div>
                    <h1 className='text-lg font-semibold'>Watering</h1>
                    <p className='text-center text-sm text-gray-600'>Keep soil moist but not soggy. Most indoor plants prefer a drink when the top inch of soil feels dry.</p>
                </div>
                <div className="bg-green-200 flex flex-col gap-2 justify-center items-center rounded-2xl h-[14rem] p-4">
                    <div className="bg-white h-[3rem] w-[3rem] rounded-full flex items-center justify-center">
                        <RiSunLine size={30} color='green' />
                    </div>
                    <h1 className='text-lg font-semibold'>Sunlight</h1>
                    <p className='text-center text-sm text-gray-600'>Indirect sunlight is key. Place your green friends near a window with filtered light for optimal growth.</p>
                </div>
                <div className="bg-green-200 flex flex-col gap-2 justify-center items-center rounded-2xl h-[14rem] p-4">
                    <div className="bg-white h-[3rem] w-[3rem] rounded-full flex items-center justify-center">
                        <GiFertilizerBag size={30} color='green' />
                    </div>
                    <h1 className='text-lg font-semibold'>Fertilizing</h1>
                    <p className='text-center text-sm text-gray-600'>Once a month during spring and summer. Use a balanced liquid fertilizer to keep them thriving.</p>
                </div>
            </div>
        </div>
    );
};

export default PlantCare;