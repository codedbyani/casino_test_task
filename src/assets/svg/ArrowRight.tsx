import React from 'react';
import { IIconProps } from '@/types/ui/iconsType';

export const ArrowRight: React.FC<IIconProps> = (props) => {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M7.875 15.75L13.125 10.5L7.875 5.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
                  strokeLinejoin="round" />
        </svg>
    );
};
