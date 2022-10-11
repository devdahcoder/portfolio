
import React, { MutableRefObject } from 'react';
import LoadingText from './loading-text';


type Props = {
    hasPageFullyLoaded: boolean;
    isTextCompleted: boolean;
    loadingTextRefElement: MutableRefObject<HTMLParagraphElement>
}

const Loading = (props: Props) => {

    const { hasPageFullyLoaded, isTextCompleted, loadingTextRefElement } = props;
    
    return (
        <div className={`fixed left-0 top-0 flex items-center justify-center w-full h-screen 
            ${hasPageFullyLoaded ? "opacity-0 z-0 invisible transition-all duration-500 ease-in-out pointer-events-none" : "opacity-100 z-20 visible pointer-events-auto"}`}>   
            <LoadingText isTextCompleted={isTextCompleted} loadingTextRefElement={loadingTextRefElement} />
        </div>
    )
}

export default Loading