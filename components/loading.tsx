
import React, { MutableRefObject } from 'react';
import LeftBackgroundOval from '../public/icons/left-background-oval';
import RightBackgroundOval from '../public/icons/right-background-oval';
import styles from '../styles/Home.module.css';
import BackgroundIcon from '../components/background-icon';
import TextCircle from '../components/text-circle';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import LoadingText from './loading-text';
import ThemeToggleButton from './theme-toggle-button';
import BackgroundGradient from './background-gradient';



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