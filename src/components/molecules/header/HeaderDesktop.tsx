import React from 'react';
import { NotificationIcon, UserIcon } from '@/assets/svg';

interface IHeaderActionItem {
    icon: React.ReactNode;
}

const HeaderActionItem: React.FC<IHeaderActionItem> = ({ icon }) => {
    return (
        <div className='bg-blue-100 w-10 h-10 flex items-center justify-center rounded-[5px] cursor-pointer hover:bg-blue-200 transition-colors duration-300'>
            {icon}
        </div>
    );
};

export const HeaderDesktop: React.FC = () => {
    return (
        <div className='hidden bg-blue-300 fixed top-0 w-full h-15 md:block'>
            <div className='container flex justify-between items-center h-full'>
                <div className='bg-[#C4C4C4] rounded-[5px] h-10 w-[75px]' />
                <div className='flex gap-[5px]'>
                    <div>Deposit</div>
                    <HeaderActionItem icon={<UserIcon />} />
                    <HeaderActionItem icon={<NotificationIcon />} />
                </div>
            </div>
        </div>
    );
};
