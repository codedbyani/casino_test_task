import React from 'react';
import { IIconProps } from '@/types/ui/iconsType';

export const DCoin: React.FC<IIconProps> = (props) => {
    return (
        <svg
            width='22'
            height='24'
            viewBox='0 0 22 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path
                d='M9.74512 0.1415C11.3198 0.141438 21.7383 -0.190516 21.7383 12.1435C21.738 24.6384 10.9192 23.7562 10.8438 23.7499H3.09473V13.2343H0.363281V10.6581H3.09473V0.1415H9.74512ZM7.45898 10.6561H12.2686V13.2323H7.45898V19.3847H10.666C11.4909 19.3847 17.4301 19.4788 17.4209 12.2265C17.4116 4.97361 11.659 4.5038 10.5156 4.5038H7.45898V10.6561Z'
                fill='#C1C9E5'
            />
        </svg>
    );
};
