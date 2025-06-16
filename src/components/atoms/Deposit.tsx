import React from 'react';
import { DepositMobileIcon, DollarIcon } from '@/assets/svg';

export const Deposit: React.FC = () => {
    return (
        <div className='flex rounded-[5px] h-10 w-[220px] border-[1px] border-blue-100 overflow-hidden items-center'>
            <div className='flex-1 bg-blue-500 h-full flex items-center p-2 gap-[10px]'>
                <div className='flex items-center justify-center text-white bg-blue-800 rounded-full w-6 h-6'>
                    <DollarIcon />
                </div>
                <p className='text-md text-white'>10,566.12</p>
            </div>
            <div className='w-10 bg-blue-700 h-full flex items-center justify-center md:flex-1 md:w-full'>
                <p className='text-md text-white hidden md:block'>DEPOSIT</p>
                <DepositMobileIcon className='md:hidden' />
            </div>
        </div>
    );
};
