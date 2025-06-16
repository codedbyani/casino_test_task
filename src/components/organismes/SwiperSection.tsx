import React from 'react';
import { SWIPER_SLIDES } from '@/utils/constants';
import { InlineSwiper } from '@/components/molecules/inlineSwiper/InlineSwiper';

export const SwiperSection: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-[25px]">
        {
                SWIPER_SLIDES.map((slide, index) => (
                    <InlineSwiper
                        key={index}
                        title={slide.label}
                        icon={<slide.icon width={20} height={20} />}
                        swiperSlides={slide.slides}
                    />
                ))
            }
        </div>
    );
};