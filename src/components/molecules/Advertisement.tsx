import React from 'react';
import Image from 'next/image';
import { ADVERTISMENT_IMAGES } from '@/utils/constants';

export const Advertisement: React.FC = () => {
    return (
        <div className='grid grid-cols-12 gap-[5px] md:gap-[10px] mt-[-10px]'>
            <div className='flex gap-[5px] md:gap-[10px] col-span-12 md:col-span-8'>
                {ADVERTISMENT_IMAGES.BIG.map((image, index) => (
                    <div className='w-full' key={index}>
                        <Image
                            alt='Advertisement'
                            src={image}
                            width={400}
                            height={250}
                            className='h-[100px] sm:h-[150px] md:h-[250px]'
                        />
                    </div>
                ))}
            </div>
            <div className='grid col-span-12 grid-cols-4 md:col-span-4 md:grid-cols-2 gap-[5px] md:gap-[10px] w-full'>
                {ADVERTISMENT_IMAGES.SMALL.map((image, index) => (
                    <Image
                        alt='Advertisement'
                        src={image}
                        width={185}
                        height={120}
                        className='h-[85px] md:h-[120px] w-full'
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};
