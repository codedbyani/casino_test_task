'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from '@/assets/svg';

interface SelectOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
}

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}

export const Select: React.FC<SelectProps> = (
    {
        options,
        value,
        onChange,
        placeholder = 'Select option',
        disabled = false,
        className,
        icon,
        ...props
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
        options.find(option => option.value === value) || null,
    );
    const selectRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: SelectOption) => {
        setSelectedOption(option);
        onChange?.(option.value);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div
            ref={selectRef}
            className={`relative w-full ${className || ''}`}
            {...props}
        >
            <div
                className={`flex border border-blue-100 items-center pl-[15px] pr-2 py-2 rounded-[5px] cursor-pointer ${
                    disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500'
                }`}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                {icon && <span className="mr-[5px]">{icon}</span>}
                <span className={`flex-grow text-md ${!selectedOption ? 'text-gray-200' : 'text-gray-200'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <div
                    className="border border-blue-100 bg-blue-200 rounded-[5px] w-6 h-6 flex items-center justify-center">
                    <ArrowRight width={10} height={10} color="text-blue-200"
                                className={`transition-all ${isOpen ? '-rotate-90' : 'rotate-90'}`} />
                </div>
            </div>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-blue-500 rounded-[5px]">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`flex items-center gap-[5px] p-2 cursor-pointer bg-blue-500 rounded-[5px] transition-all text-md`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.icon}
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};