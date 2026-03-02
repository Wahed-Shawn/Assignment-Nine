import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
    const { plantName, image, category, price, rating,plantId } = plant

    return (
        <div className="card shadow-sm border border-gray-300 hover:shadow-2xl hover:shadow-green-500">
            <figure className='h-[22rem]'>
                <img src={image} className='h-full w-full object-cover' />
                <span className="badge absolute top-[1rem] right-[1rem] rounded-3xl py-4">
                    <IoIosStar size={17} color='orange' /> <span className='font-bold'>{rating}</span>
                </span> 
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <p className='text-lg text-gray-600 font-semibold'>{category}</p>
                    <span className='font-bold text-xl text-green-500'>Price: ${price}</span>
                </div>
                <h2 className="card-title">{plantName}</h2>
                <Link to={`/plantDetails/${plantId}`} className='btn bg-green-300/60 text-lg text-green-600 py-6 hover:bg-green-400 hover:text-white'>View Details</Link>
            </div>
        </div>
    );
};

export default PlantCard;