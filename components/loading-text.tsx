import React from 'react';

type Props = {
    isTextCompleted: boolean;
    loadingTextRefElement: React.MutableRefObject<HTMLParagraphElement>;
}

const LoadingText = (props: Props) => {
    return (
        <div className="z-50 flex flex-col items-center justify-center">
            <div className="text-8xl font-seibold capitalize">
                <p className={`${!props?.isTextCompleted && 'animate-blinker'}`} ref={props?.loadingTextRefElement}>
                    O
                </p>
            </div>

            <div className={`
                flex flex-row items-center font-inter text-xl font-medium space-x-7 
                ${props?.isTextCompleted ? 'visible transition-all ease-in-out delay-300 opacity-100' : 'invisible opacity-0'}
                relative before:contents-[] before:absolute before:right-44 before:top-1/2 before:h-5 before:rounded-full
                before:w-0.5 before:bg-zinc-700 before:-translate-x-1/2 before:-translate-y-1/2 
            `}>
                <p className="">Junior Software Developer</p> <p>Product Designer</p>
            </div>
        </div>
    )
}

export default LoadingText;