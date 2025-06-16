'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { HERO_SWIPER_SLIDES } from '@/utils/constants';
import Image from 'next/image';

export const HeroSwiper: React.FC = () => {
    return (
        <div className="w-full">
            <Swiper
                style={{
                    paddingBottom: '40px',
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                }}
                spaceBetween={10}
                pagination={
                    {
                        el: '.custom-pagination',
                        clickable: true,
                        renderBullet: (_, className) => {
                            return `<span class="${className}"></span>`;
                        },
                    }
                }
                modules={[Pagination]}
                className="h-[340px]"
            >
                {
                    HERO_SWIPER_SLIDES.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Image src={slide} alt={`Hero swiper slide ${index + 1}`} fill className="rounded-[5px]" />
                        </SwiperSlide>
                    ))
                }
                <div className="custom-pagination"></div>
            </Swiper>
        </div>
)
};