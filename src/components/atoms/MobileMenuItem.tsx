import React, { ReactNode } from 'react';

interface IMobileMenuItem {
    icon?: ReactNode;
    title?: string;
    className?: string;
    onClick?: () => void;
}

export const MobileMenuItem: React.FC<IMobileMenuItem> = ({
    icon,
    title,
    className = '',
    onClick,
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-[2px] gray-200 ${className}`}
            onClick={onClick}
        >
            {icon && <div className='w-6 h-6 flex items-center justify-center'>{icon}</div>}
            {title && <span className='text-sm white'>{title}</span>}
        </div>
    );
};
