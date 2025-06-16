import React from 'react';

export enum EButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    DANGER = 'danger',
    GHOST = 'ghost',
    GREEN = 'green',
}

export enum EButtonSize {
    BIG = 'big',
    SMALL = 'small',
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: EButtonVariant;
    isLoading?: boolean;
    icon?: React.ReactNode;
    size?: EButtonSize;
    children: React.ReactNode;
}

const variantClassMap: Record<EButtonVariant, string> = {
    [EButtonVariant.PRIMARY]: 'bg-blue-700 text-white',
    [EButtonVariant.SECONDARY]: 'bg-gray-200 text-black',
    [EButtonVariant.DANGER]: 'bg-red-600 text-white',
    [EButtonVariant.GHOST]: 'bg-transparent text-gray-700',
    [EButtonVariant.GREEN]: 'bg-green-400 text-white',
};

const sizeClassMap: Record<EButtonSize, string> = {
    [EButtonSize.BIG]: 'h-[50px] text-[14px] leading-[16px] rounded-[3px]',
    [EButtonSize.SMALL]: 'h-10 text-[12px] leading-[14px] rounded-[2px]',
};

export const Button: React.FC<IButton> = ({
    variant = EButtonVariant.PRIMARY,
    isLoading = false,
    icon,
    children,
    disabled,
    className,
    size = EButtonSize.SMALL,
    ...rest
}) => {
    const baseClasses =
        'inline-flex items-center justify-center px-5 cursor-pointer tracking-[0.1px] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all hover:opacity-90';
    const variantClasses = variantClassMap[variant];
    const isDisabled = disabled || isLoading;

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${sizeClassMap[size]} ${className}`}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            {...rest}
        >
            {isLoading ? (
                <span className='animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full'></span>
            ) : (
                icon && <span className='mr-2'>{icon}</span>
            )}
            {children}
        </button>
    );
};
