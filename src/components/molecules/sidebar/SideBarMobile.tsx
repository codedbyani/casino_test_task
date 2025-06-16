import React from 'react';
import { SIDEBAR_MOBILE_ITEMS_MOCK } from '@/utils/mocks/SideBarMock';

export const SideBarMobile: React.FC = () => {
    return (
        <div className='flex h-15 w-full gap-7 bg-blue-600 items-center z-50 justify-center border-r-[1px] border-blue-100 gray-200 fixed bottom-0 md:hidden'>
            {SIDEBAR_MOBILE_ITEMS_MOCK.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
            ))}
        </div>
    );
};
