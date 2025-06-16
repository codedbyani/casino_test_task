import React from 'react';
import { Button, EButtonVariant } from '../atoms/Button';

export const LoginButtons: React.FC = () => {
    return (
        <div className='flex w-full gap-[10px] mb-[20px] md:hidden'>
            <Button children='LOG IN' className='flex-1' variant={EButtonVariant.GREEN} />
            <Button children='SIGN UP' className='flex-1' />
        </div>
    );
};
