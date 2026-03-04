import React from 'react';
import PlantCard from './PlantCard';
import { Link, useLoaderData } from 'react-router';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

const TopRated = () => {
    const plantsData = useLoaderData()

    const topRated = plantsData.sort((a, b) => b.rating - a.rating).slice(0, 6)
    // console.log(topRated)

    return (
        <div className='mt-[8rem] mb-[4rem]'>
            <h1 className='text-2xl font-semibold text-center md:text-3xl'>Top Rated Indoor Plants</h1>
            <p className='mb-2 text-sm text-center text-gray-500 md:text-[1rem]'>Discover the most loved companions for your living spaces.</p>

            <div className="">
                <div className="flex items-center justify-end mb-4 gap-3">
                    <button className='prev-nav-btn h-[2rem] w-[2rem] rounded-full flex items-center justify-center bg-gray-300 cursor-pointer md:h-[2.5rem] md:w-[2.5rem]'><GrFormPreviousLink size={22} /></button>
                    <button className='next-nav-btn h-[2rem] w-[2rem] rounded-full flex items-center justify-center bg-gray-300 cursor-pointer md:h-[2.5rem] md:w-[2.5rem]'><GrFormNextLink size={22} /></button>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.prev-nav-btn',
                        nextEl: '.next-nav-btn',
                    }}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {topRated.map(plant => (
                        <SwiperSlide>
                            <PlantCard plant={plant} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='text-center mt-8 text-lg font-semibold flex items-center justify-center gap-2'>
                    <Link to='/plants' className=''>View All Plants</Link>
                    <FaArrowRight size={20} />
                </div>
            </div>
        </div>
    );
};

export default TopRated;