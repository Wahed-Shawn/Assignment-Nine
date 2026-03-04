import React from 'react';
import Hero from '../components/Hero';
import TopRated from '../components/TopRated';
import PlantCare from '../components/PlantCare';
import GreenExperts from '../components/GreenExperts';
import DecorIdeas from '../components/DecorIdeas';

const Home = () => {
    return (
        <div className='xl:px-3'>
            <Hero />
            <TopRated />
            <PlantCare />
            <GreenExperts />
            <DecorIdeas />
        </div>
    );
};

export default Home;