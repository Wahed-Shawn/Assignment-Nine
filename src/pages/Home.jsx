import React from 'react';
import Hero from '../components/Hero';
import TopRated from '../components/TopRated';

const Home = () => {
    return (
        <div className='xl:px-3'>
            <Hero />
            <TopRated />
        </div>
    );
};

export default Home;