import React from 'react'
import LeftBackgroundOval from '../public/icons/left-background-oval'
import RightBackgroundOval from '../public/icons/right-background-oval'
import { useMainContainer } from '../state/main'

type Props = {
    className?: string;
    containerClassName?: string
}

const BackgroundGradient = (props: Props) => {

    const { hasPageFullyLoaded, navigationModal } = useMainContainer();
    const { className, containerClassName } = props;
// ${ hasPageFullyLoaded ? '-z-50' : 'z-50'} ${ navigationModal ? "z-50" : ""}  
    return (
        <div className={`flex items-center justify-center w-screen h-screen bg-white dark:bg-dark-bg fixed transition-all duration-500 ease-in-out -z-20 `}>
            <div className="flex animate-spin-slow items-center justify-center w-screen h-screen ">
                
                <LeftBackgroundOval className="left-bg-oval border w-full h-fit" />
                <RightBackgroundOval className="right-bg-oval border w-full h-full" />
                
            </div>
        </div>
    )
}

export default BackgroundGradient