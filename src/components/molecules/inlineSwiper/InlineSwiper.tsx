'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight } from '@/assets/svg';

interface IInlineSwiper {
    title: string;
    icon: React.ReactNode;
    swiperSlides: string[];
}

export const InlineSwiper: React.FC<IInlineSwiper> = ({ swiperSlides, title, icon }) => {
    return <div className="flex flex-col gap-[15px] overflow-hidden">
        <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-[10px]">
                {icon}
                <p className="font-medium text-white">{title}</p>
            </div>
            <div className="flex gap-[10px]">
                <div
                    className="swiper-button-prev cursor-pointer flex justify-center items-center !static w-[35px] h-[35px] border-2 border-[#253241] rounded-[5px]">
                    <ArrowRight className="transform rotate-180" />
                </div>
                <div
                    className="swiper-button-next cursor-pointer flex justify-center items-center !static w-[35px] h-[35px] border-2 border-[#253241] rounded-[5px]">
                    <ArrowRight />
                </div>
            </div>
        </div>
        <Swiper
            slidesPerView={3}
            spaceBetween={15}
            breakpoints={{
                480: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                },
            }}
            freeMode={true}
            pagination={
                {
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: (_, className) => {
                        return `<span class="${className}"></span>`;
                    },
                }
            }
            modules={[Pagination, FreeMode, Navigation]}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                disabledClass: 'opacity-50',
            }}
            className="h-[340px] w-full"
        >
            {swiperSlides.map((slide, index) => (
                <SwiperSlide key={index} className="xs:!w-[150px]">
                    <Image
                        src={slide}
                        alt={slide}
                        width={150}
                        height={200}
                        className="h-[150] xs:h-[200px] select-none"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>;
};