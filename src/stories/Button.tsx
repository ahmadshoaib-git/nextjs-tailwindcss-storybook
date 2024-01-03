'use client';
import React from 'react';
import './button.css';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
    console.log('backgroundColor >', backgroundColor);
    const btn = 'pointer border-0 rounded inline-block leading-none';
    const bgColor = `!bg-[${backgroundColor}]`;
    const primaryBtn = `text-white ${backgroundColor ? bgColor : 'bg-[#1ea7fd]'}`;
    const secondaryBtn = `text-[#333]  ${backgroundColor ? bgColor : 'bg-transparent'} shadow-[rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset]`;
    const btnSizeSm = 'text-[0.8rem] px-[1rem] py-[0.65rem]';
    const btnSizeMd = 'text-[0.9rem] px-[1.25rem] py-[0.7rem]';
    const btnSizeLg = 'text-[1rem] px-[1.5rem] py-[0.8rem]';
    const mode = primary ? primaryBtn : secondaryBtn;
    const btnSize = size === 'large' ? btnSizeLg : size === 'medium' ? btnSizeMd : btnSizeSm;
    return (
        <button type="button" className={`${btn} ${mode} ${btnSize}`} {...props}>
            {label}
        </button>
    );
};

