import React from 'react';
import { Button, EButtonSize } from '../atoms/Button';

export const NoCrypto: React.FC = () => {
    return (
        <div>
            <Button children='BUY NOW' size={EButtonSize.BIG} className='w-[175px]' />
        </div>
    );
};
