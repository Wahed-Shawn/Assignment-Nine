import React from 'react';
import Hero from '../components/Hero';
import TopRated from '../components/TopRated';
import PlantCare from '../components/PlantCare';

const Home = () => {
    return (
        <div className='xl:px-3'>
            <Hero />
            <TopRated />
            <PlantCare />
        </div>
    );
};

export default Home;