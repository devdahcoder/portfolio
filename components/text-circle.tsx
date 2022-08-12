import React from 'react';

type Props = {
    text?: string;
    className?: string;
}

const TextCircle = (props: Props) => {

        // map through the text and create a span for each letter
        // then add a class to each span that will animate the letter
        // then add a class to the parent div that will animate the span
        // then add a class to the parent div that will animate the parent div


    const { text, className } = props;

    const splitText = text?.split('');

    return (
        <div className="absolute -top-12 -left-12 capitalize rounded-full h-[180px] w-[180px] font-work-sans animate-spin-slow">
            <p>
                {splitText?.map((letter, index) => {
                    return (
                        <span style={{
                            transform: `rotate(${index * 7.1}deg)`,
                            transformOrigin: '0 90px',
                        }} 
                        className={`text-xs absolute left-1/2 text-dark-green-text`} key={index}>{letter}</span>
                    )
                })}
            </p>
        </div>
    )
}

export default TextCircle