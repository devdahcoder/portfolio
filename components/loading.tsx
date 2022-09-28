
import React, { MutableRefObject } from 'react';
import LeftBackgroundOval from '../public/icons/left-background-oval';
import RightBackgroundOval from '../public/icons/right-background-oval';
import styles from '../styles/Home.module.css';
import BackgroundIcon from '../components/background-icon';
import TextCircle from '../components/text-circle';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import LoadingText from './loading-text';
import ThemeToggleButton from './theme-toggle-button';


type Props = {
    hasPageFullyLoaded: boolean;
    isTextCompleted: boolean;
    loadingTextRefElement: MutableRefObject<HTMLParagraphElement>
}

const Loading = (props: Props) => {

    const { hasPageFullyLoaded, isTextCompleted, loadingTextRefElement } = props;
    
    return (
        <div className={`fixed left-0 top-0 flex items-center justify-center w-full h-screen 
            bg-white-bg dark:bg-dark-bg ${hasPageFullyLoaded ? "opacity-0 z-0 invisible transition-all duration-500 ease-in-out" : "opacity-100 z-40 visible"}`}>


            <div className="absolute right-6 top-7">
                <ThemeToggleButton />
            </div>

            <LoadingText
                isTextCompleted={isTextCompleted}
                loadingTextRefElement={loadingTextRefElement}
            />

        </div>
    )
}

export default Loading