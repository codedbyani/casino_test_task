import React from 'react';
import { NotificationIcon, UserIcon } from '@/assets/svg';
import { Deposit } from '@/components/atoms/Deposit';
import { HeaderActionItem } from '@/components/atoms/HeaderActionItem';

export const HeaderDesktop: React.FC = () => {
    return (
        <div className='hidden bg-blue-300 fixed top-0 w-[calc(100%-60px)] h-15 md:block'>
            <div className='container flex justify-between items-center h-full'>
                <div className='bg-gray-100 rounded-[5px] h-10 w-[75px]' />
                <div className='flex gap-[5px]'>
                    <Deposit />
                    <HeaderActionItem icon={<UserIcon />} />
                    <HeaderActionItem icon={<NotificationIcon />} />
                </div>
            </div>
        </div>
    );
};
