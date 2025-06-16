import React from 'react';
import { IIconProps } from '@/types/ui/iconsType';

export const MenuHamburgerIcon: React.FC<IIconProps> = (props) => {
    return (
        <svg
            width='20'
            height='16'
            viewBox='0 0 20 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path
                d='M1 1H19M1 8H19M1 15H19'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    );
};
