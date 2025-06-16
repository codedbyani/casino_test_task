import React from 'react';

interface IFilterItem {
    label: string;
    icon: React.ReactNode;
    isSelected?: boolean;
}

export const FilterItem: React.FC<IFilterItem> = ({ icon, isSelected = false, label }) => {
    const selectedClass = 'border border-blue-500 bg-blue-500 text-white';

    return (
        <div
            className={`flex cursor-pointer w-max px-[10px] rounded-[5px] justify-center items-center gap-[5px] text-gray-200 bg-[#223444] border border-[#273847] h-10 ${
                isSelected && selectedClass
            } `}
        >
            {icon}
            <p className='text-md'>{label}</p>
        </div>
    );
};
