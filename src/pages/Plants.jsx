import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../components/PlantCard';

const Plants = () => {
    const plantsData = useLoaderData()
    return (
        <div className='px-4'>
            <h1 className='text-3xl text-gray-700 text-center font-bold mb-8'>Our Plants Collection</h1>

            <div className="grid grid-cols-3 gap-8">
                {
                    plantsData.map(plant => <PlantCard key={plant.plantId} plant={plant} />)
                }
            </div>
        </div>
    );
};

export default Plants;