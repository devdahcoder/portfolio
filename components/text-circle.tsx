import React from 'react';
import { WindowSize } from '../hooks';

type Props = {
    text?: string;
    className?: string;
}

const TextCircle = (props: Props) => {

    const { text, className } = props;

    const splitText = text?.split('');

    const breakpoint = 320;
    
    const width = WindowSize();

    return (
        <div className={`
            absolute capitalize rounded-full font-work-sans animate-spin-slow
            h-[140px] small-xs:h-[180px] 
            w-[140px] small-xs:w-[180px] ${className}`}>
            <p>
                {splitText?.map((letter, index) => {
                    return (
                        <span style={{
                            transform: `rotate(${index * 7.0}deg)`,
                            transformOrigin: `0 ${width >= breakpoint ? '90px' : '70px'}`,
                        }} 
                        className={`text-[0.50rem] small-xs:text-[0.55rem] z-0 absolute left-1/2 text-green-200 font-work-sans`} key={index}>{letter}</span>
                    )
                })}
            </p>
        </div>
    )
}

export default TextCircle
