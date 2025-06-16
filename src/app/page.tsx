import React from 'react';
import { SwiperSection } from '@/components/organismes/SwiperSection';
import { HeroSwiper } from '@/components/molecules/heroSwiper/HeroSwiper';
import { HERO_SWIPER_SLIDES } from '@/utils/constants';
import { LoginButtons } from '@/components/molecules/LoginButtons';
import { Advertisement } from '@/components/molecules/Advertisement';
import { Filter } from '@/components/molecules/Filter';
import { NoCrypto } from '@/components/molecules/NoCrypto';
import { AboutUs } from '@/components/molecules/AboutUs';

const Home: React.FC = () => {
    return (
        <div className='container pt-[15px]'>
            <HeroSwiper items={HERO_SWIPER_SLIDES} />
            <LoginButtons />
            <Advertisement />
            <Filter />
            <SwiperSection />
            <NoCrypto />
            <AboutUs />
        </div>
    );
};

export default Home;
