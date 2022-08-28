import React from 'react';

type Props = {
    text?: string;
    className?: string;
}

const TextCircle = (props: Props) => {

    const { text, className } = props;

    const splitText = text?.split('');

    return (
        <div className={`absolute -top-12 -left-12 capitalize rounded-full h-[180px] w-[180px] font-work-sans animate-spin-slow ${className}`}>
            <p>
                {splitText?.map((letter, index) => {
                    return (
                        <span style={{
                            transform: `rotate(${index * 7.1}deg)`,
                            transformOrigin: '0 90px',
                        }} 
                        className={`text-[0.60rem] absolute left-1/2 text-green-200 font-work-sans`} key={index}>{letter}</span>
                    )
                })}
            </p>
        </div>
    )
}

export default TextCircle