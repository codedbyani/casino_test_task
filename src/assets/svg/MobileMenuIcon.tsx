import React from 'react';
import { IIconProps } from '@/types/ui/iconsType';

export const MobileMenuIcon: React.FC<IIconProps> = (props) => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path d='M3 6H21' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
            <path
                d='M9.48999 12H21'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
            />
            <path d='M3 12H5.99' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
            <path d='M3 18H21' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
        </svg>
    );
};
