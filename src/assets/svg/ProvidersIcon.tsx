import React from 'react';
import { IIconProps } from '@/types/ui/iconsType';

export const ProvidersIcon: React.FC<IIconProps> = (props) => {
    return (
        <svg
            width='22'
            height='18'
            viewBox='0 0 22 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path
                d='M3.97883 6.68508C1.99294 5.89073 1 5.49355 1 5C1 4.50645 1.99294 4.10927 3.97883 3.31492L6.7873 2.19153C8.77318 1.39718 9.7661 1 11 1C12.2339 1 13.2268 1.39718 15.2127 2.19153L18.0212 3.31492C20.0071 4.10927 21 4.50645 21 5C21 5.49355 20.0071 5.89073 18.0212 6.68508L15.2127 7.8085C13.2268 8.6028 12.2339 9 11 9C9.7661 9 8.77318 8.6028 6.7873 7.8085L3.97883 6.68508Z'
                stroke='currentColor'
                strokeWidth='1.2'
            />
            <path
                d='M21 9C21 9 20.0071 9.8907 18.0212 10.6851L15.2127 11.8085C13.2268 12.6028 12.2339 13 11 13C9.7661 13 8.77318 12.6028 6.7873 11.8085L3.97883 10.6851C1.99294 9.8907 1 9 1 9'
                stroke='currentColor'
                strokeWidth='1.2'
                strokeLinecap='round'
            />
            <path
                d='M21 13C21 13 20.0071 13.8907 18.0212 14.6851L15.2127 15.8085C13.2268 16.6028 12.2339 17 11 17C9.7661 17 8.77318 16.6028 6.7873 15.8085L3.97883 14.6851C1.99294 13.8907 1 13 1 13'
                stroke='currentColor'
                strokeWidth='1.2'
                strokeLinecap='round'
            />
        </svg>
    );
};
