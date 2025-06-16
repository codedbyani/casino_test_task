import React from 'react';
import { Button, EButtonSize } from '../atoms/Button';
import Image from 'next/image';

const IMAGE_PATHS: string[] = [
    '/images/png/visa.png',
    '/images/png/mc.png',
    '/images/png/applePay.png',
    '/images/png/googlePay.png',
    '/images/png/neteller.png',
    '/images/png/skrill.png',
    '/images/png/revolut.png',
];

export const NoCrypto: React.FC = () => {
    return (
        <div className='bg-blue-500 border-[1px] border-blue-900 p-[25px] flex gap-10 items-center flex-col md:flex-row'>
            <p className='text-xl leading-[25px] font-bold tracking-[0.2px] text-white text-center md:text-left'>
                You don’t have Crypto?
                <br />
                No problem.
            </p>
            <div className='flex items-center gap-[15px] flex-wrap justify-center'>
                {IMAGE_PATHS.map((path, index) => (
                    <Image src={path} width={80} height={55} key={index} alt='logo' />
                ))}
            </div>
            <Button children='BUY NOW' size={EButtonSize.BIG} className='w-full md:w-[175px]' />
        </div>
    );
};
