import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ConsultationForm from '../components/ConsultationForm';
import { IoIosStar } from 'react-icons/io';
import { GiDiamondHard } from 'react-icons/gi';

const PlantDetails = () => {
    const plantsData = useLoaderData()
    const { id } = useParams()

    const selectedPlant = plantsData.find(plant => plant.plantId == id)
    const { plantName, image, category, price, rating, plantId, availableStock, careLevel, description } = selectedPlant
    console.log(selectedPlant)

    return (
        <div className='flex justify-between px-4'>
            <div className="w-[57%]">
                <div className="h-[30rem] rounded-2xl overflow-hidden">
                    <img src={image} className='h-full w-full object-cover object-center' />
                </div>
                <div className="flex items-center justify-between">
                    <div className="mt-5">
                        <h1 className='text-4xl font-bold'>{plantName}</h1>
                        <p className='text-xl font-semibold text-gray-600'>{category}</p>
                    </div>
                    <span className="badge bg-[#0FBD0F] text-white px-6 py-5 text-lg font-semibold">
                        ${price}
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-6 my-6">
                    <div className="p-4 h-[6rem] rounded-xl bg-green-200 flex flex-col justify-center gap-1">
                        <h3 className='text-gray-500 font-semibold text-sm'>RATING</h3>
                        <div className='flex items-center gap-1.5'><span className='text-2xl font-semibold'>{rating}</span> <IoIosStar size={20} color='orange' /></div>
                    </div>
                    <div className="p-4 h-[6rem] rounded-xl bg-green-200 flex flex-col justify-center gap-1">
                        <h3 className='text-gray-500 font-semibold text-sm'>STOCK</h3>
                        <div className='flex items-center gap-1.5'>
                            <span className='text-2xl font-semibold'>{availableStock}</span>
                            <span className='text-green-600 font-semibold'>available</span>
                        </div>
                    </div>
                    <div className="p-4 h-[6rem] rounded-xl bg-green-200 flex flex-col justify-center gap-1">
                        <h3 className='text-gray-500 font-semibold text-sm'>CARE LEVEL</h3>
                        <div className='flex items-center gap-1.5'>
                            <span className='text-2xl font-semibold'>{careLevel}</span>
                            <GiDiamondHard size={30} color='purple' />
                        </div>
                    </div>
                </div>

                <div className="">
                    <h2 className='text-xl font-semibold mb-2'>Description</h2>
                    <p className='text-gray-700'>{description}</p>
                </div>
            </div>

            <div className="w-[40%]">
                <ConsultationForm />
            </div>
        </div>
    );
};

export default PlantDetails;