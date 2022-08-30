import React from 'react';

type Props = {
    isTextCompleted: boolean;
    loadingTextRefElement: React.MutableRefObject<HTMLParagraphElement>;
}

const LoadingText: (props: Props) => JSX.Element = (props: Props) => {
    return (
        <div className="text-center z-50 flex flex-col items-center justify-center text-dark-bg dark:text-white 
            transition-all duration-500 ease-in-out">

            <div className="text-4xl xs:text-6xl font-seibold capitalize">
                <p className={`${!props?.isTextCompleted && 'animate-blinker'}`} ref={props?.loadingTextRefElement}>
                    O
                </p>
            </div>
{/* text-8xl */}
{/* text-xl */}
{/* before:contents-[] before:absolute before:right-44 before:top-1/2 before:h-5 before:rounded-full
                before:w-0.5 before:bg-zinc-700 before:dark:bg-white before:-translate-x-1/2 before:-translate-y-1/2  */}
            <div className={`relative text-xs
                flex flex-col xs:flex-row items-center justify-center text-center font-inter font-medium space-x-7 
                xs:before:contents-[] xs:before:absolute xs:before:right-28 xs:before:top-1/2 xs:before:h-5 xs:before:rounded-full
                xs:before:w-0.5 xs:before:bg-black xs:before:dark:bg-white xs:before:-translate-x-1/2 xs:before:-translate-y-1/2
                before:transition-all before:ease-in-out before:duration-500
                ${props?.isTextCompleted ? 'visible transition-all ease-in-out duration-500 opacity-100' : 'invisible opacity-0'}
            `}>
                <p className="">Junior Software Developer</p> <p>Product Designer</p>
            </div>

        </div>
    )
}

export default LoadingText;