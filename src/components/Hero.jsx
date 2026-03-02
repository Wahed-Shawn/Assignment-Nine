import React from 'react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import bg4 from '../assets/bg4.jpg'
import bg5 from '../assets/bg5.jpg'

const Hero = () => {
    const slides = [bg1, bg2, bg3, bg4, bg5]

    return (
        <div className="relative h-[29rem] overflow-hidden">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                effect='fade'
                modules={[Autoplay, Pagination, EffectFade]}
            >
                {
                    slides.map(slide =>
                        <SwiperSlide>
                            <div className="h-[29rem] text-white rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${slide})` }}></div>
                        </SwiperSlide>
                    )
                }
            </Swiper>

            <div className="absolute z-30 text-white bg-black/40 rounded-2xl h-full w-full top-0 left-0 flex flex-col items-center justify-center gap-5">
                <h1 className='text-[2.8rem] font-bold'>GreenNest – Indoor Plant Care & Store</h1>
                <p className='text-xl font-semibold text-gray-300'>Breathe Better, Live Greener with our curated collection of indoor serenity.</p>
                <div className="space-x-5">
                    <button onClick={() => {console.log('clicked')}} className='btn btn-outline text-lg p-6 text-white border-0 bg-[#0FBD0F]'>Shop Collection</button>
                    <button className='btn btn-outline text-lg p-6 text-white border-0 bg-white/10 backdrop-blur-[5px]'>Plant Care Guide</button>
                </div>
            </div>
        </div>

    );
};

export default Hero;