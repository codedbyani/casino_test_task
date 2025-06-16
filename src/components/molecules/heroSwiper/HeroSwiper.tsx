'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

interface IHeroSwiper {
    items: string[];
}

export const HeroSwiper: React.FC<IHeroSwiper> = ({ items }) => {
    return (
        <div className='w-full'>
            <Swiper
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                }}
                spaceBetween={10}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: (_, className) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
                modules={[Pagination]}
                className='h-[340px] !pb-10 max-md:!h-[240px]'
            >
                {items.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={slide}
                            alt={`Hero swiper slide ${index + 1}`}
                            fill
                            className='rounded-[5px] object-fill'
                        />
                    </SwiperSlide>
                ))}
                <div className='custom-pagination'></div>
            </Swiper>
        </div>
    );
};
