import React, { useState, useEffect, useRef } from 'react';

type Props = {}

const LoadingText = (props: Props) => {

    const [delayTyping, setDelayTyping] = useState<number>(400);
    const [text, setText] = useState<string>("lamide");
    const [index, setIndex] = useState<number>(0);
    const [isTextCompleted, setIsTextCompleted] = useState<boolean>(false);

    const refElement = useRef<HTMLParagraphElement>(null) as React.MutableRefObject<HTMLParagraphElement>;

    const printText = () => {
        if (index < text?.length) {
            refElement.current.innerText += text.charAt(index);
            setIndex(index => index + 1);
        }
        else if (index === text?.length) {
            setIsTextCompleted(true);
            refElement.current.insertAdjacentHTML(
                'beforeend',
                `<span class="text-green-500 animate-pulse">.</code>`,
            );
        }
    }

    useEffect(() => {
        const printTextTimeOut = setTimeout(printText, delayTyping);
        return () => clearTimeout(printTextTimeOut);
    }, [index]);

    return (
        <div className="z-50 flex flex-col items-center justify-center">
            <div className="text-8xl font-seibold capitalize">
                <p className={`${!isTextCompleted && 'animate-blinker'}`} ref={refElement}>
                    O
                </p>
            </div>

            <div className={`
                flex flex-row items-center font-inter text-xl font-medium space-x-7 
                ${isTextCompleted ? 'visible transition-all ease-in-out delay-300 opacity-100' : 'invisible opacity-0'}
                relative before:contents-[] before:absolute before:right-44 before:top-1/2 before:h-5 before:rounded-full
                before:w-0.5 before:bg-zinc-700 before:-translate-x-1/2 before:-translate-y-1/2 
            `}>
                <p className="">Junior Software Developer</p> <p>Product Designer</p>
            </div>
        </div>
    )
}

export default LoadingText;