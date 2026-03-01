import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Mainlayout = () => {
    return (
        <div>
            <header className='mb-[7rem]'>
                <NavBar />
            </header>
            <main className='min-h-screen container mx-auto'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Mainlayout;