'use client';
import React, { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight } from '@/assets/svg';

interface IInlineSwiper {
    title: string;
    icon: React.ReactNode;
    swiperSlides: string[];
    slideClasses?: string;
}

export const InlineSwiper: React.FC<IInlineSwiper> = ({
    swiperSlides,
    title,
    icon,
    slideClasses,
}) => {
    const uniqueId = useId();

    const prevClass = `swiper-prev-${uniqueId}`;
    const nextClass = `swiper-next-${uniqueId}`;

    return (
        <div className='flex flex-col gap-[15px] overflow-hidden'>
            <div className='flex w-full justify-between items-center'>
                <div className='flex items-center gap-[10px]'>
                    {icon}
                    <p className='font-medium text-white'>{title}</p>
                </div>
                <div className='flex gap-[10px]'>
                    <div
                        className={`${prevClass} cursor-pointer flex justify-center items-center !static w-[35px] h-[35px] border-2 border-[#253241] rounded-[5px]`}
                    >
                        <ArrowRight className='transform rotate-180' />
                    </div>
                    <div
                        className={`${nextClass} cursor-pointer flex justify-center items-center !static w-[35px] h-[35px] border-2 border-[#253241] rounded-[5px]`}
                    >
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
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: (_, className) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
                modules={[Pagination, FreeMode, Navigation]}
                navigation={{
                    nextEl: `.${nextClass}`,
                    prevEl: `.${prevClass}`,
                    disabledClass: 'opacity-50',
                }}
                className='w-full'
            >
                {swiperSlides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className={`${slideClasses ?? '!h-[150px] xs:!h-[200px]'} xs:!w-[150px]`}
                    >
                        <Image
                            src={slide}
                            alt={slide}
                            width={150}
                            height={200}
                            className='h-full w-full select-none cursor-pointer hover:opacity-80 transition-all duration-300'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
