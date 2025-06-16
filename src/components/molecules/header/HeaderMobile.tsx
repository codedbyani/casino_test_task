import React from 'react';
import { Deposit } from '@/components/atoms/Deposit';
import { HeaderActionItem } from '@/components/atoms/HeaderActionItem';
import { NotificationIcon, UserIcon } from '@/assets/svg';

export const HeaderMobile: React.FC = () => {
    return (
        <div className='flex fixed top-0 h-15 w-full bg-blue-300 px-[10px] py-[14px] justify-between items-center z-50 md:hidden'>
            <div className='bg-gray-100 rounded-[5px] h-10 w-[75px]' />
            <Deposit />
            <div className='flex items-center gap-[5px]'>
                <HeaderActionItem icon={<UserIcon />} />
                <HeaderActionItem icon={<NotificationIcon />} />
            </div>
        </div>
    );
};
