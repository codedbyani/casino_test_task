import React, { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    wrapperClassName?: string;
    inputClassName?: string;
}

export const Input: React.FC<InputProps> = (
    {
        icon,
        wrapperClassName = '',
        inputClassName = '',
        className = '',
        ...props
    }) => {
    return (
        <div className={`relative flex items-center w-full ${wrapperClassName}`}>
            {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    {icon}
                </div>
            )}
            <input
                className={`w-full rounded-[3px] border border-blue-100 text-md bg-blue-500 px-4 py-2 outline-none transition-all focus:ring-0 ${
                    icon ? 'pl-11' : ''
                } ${inputClassName} ${className}`}
                {...props}
            />
        </div>
    );
};