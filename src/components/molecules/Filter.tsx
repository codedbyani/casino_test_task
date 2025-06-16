import React from 'react';
import { Input } from '../atoms/Input';
import { Search } from '@/assets/svg';
import { FilterItem } from '../atoms/FilterItem';
import { FILTER_ITEMS, FILTER_ITEMS_SELECT } from '@/utils/constants';
import { Select } from '../atoms/Select';

export const Filter: React.FC = () => {
    return (
        <div className='mt-5 flex flex-col gap-[15px]'>
            <Input icon={<Search width={22} height={22} />} placeholder='Search your game' />
            <div className='flex gap-2 overflow-x-auto'>
                <div className='flex gap-[7px]'>
                    {FILTER_ITEMS.map((item, index) => (
                        <FilterItem
                            icon={item.icon}
                            label={item.label}
                            isSelected={index === 0}
                            key={index}
                        />
                    ))}
                </div>
                <div className='flex w-full gap-[10px]'>
                    {FILTER_ITEMS_SELECT.map((options, index) => (
                        <Select options={options} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
