import React from 'react';
import { MenuHamburgerIcon } from '@/assets/svg';
import { SIDEBAR_ITEMS_MOCK } from '@/utils/mocks/SideBarMock';

export const SideBarDesktop: React.FC = () => {
    return (
        <div className='w-15 hidden flex-col items-center py-[23px] bg-blue-400 fixed top-0 h-screen gray-200 border-r-[1px] border-blue-100 overflow-auto md:flex'>
            <MenuHamburgerIcon className='w-5 min-h-4 cursor-pointer transition-opacity duration-300 hover:opacity-70' />
            <div className='flex flex-col items-center gap-5 mt-11'>
                {SIDEBAR_ITEMS_MOCK.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex items-center justify-center w-5 cursor-pointer transition-opacity duration-300 hover:opacity-70'
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
