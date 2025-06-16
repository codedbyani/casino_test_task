import React from 'react';

interface IHeaderActionItem {
    icon: React.ReactNode;
}

export const HeaderActionItem: React.FC<IHeaderActionItem> = ({ icon }) => {
    return (
        <div className='bg-blue-200 w-10 h-10 flex items-center justify-center rounded-[5px] border-[1px] border-blue-100 cursor-pointer hover:bg-blue-300 transition-colors duration-300'>
            {icon}
        </div>
    );
};
