import React from 'react';
import LeftBackgroundOval from '../public/icons/left-background-oval';
import RightBackgroundOval from '../public/icons/right-background-oval';
import styles from '../styles/Home.module.css';
import BackgroundIcon from '../components/background-icon';
import TextCircle from '../components/text-circle';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import LoadingText from './loading-text';


type Props = {}

const Loading = (props: Props) => {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-white-bg relative">

            {/* <TextCircle text={"design is life - design is life - design is life - "} className={""} /> */}
            {/* <LoadingText /> */}
            <div className="">
                <BackgroundIcon 
                    className="w-[70rem] h-full absolute top-0 right-0 z-10" 
                    backgroundSvgIcon={<RightBackgroundOval className="w-full h-full" />} 
                />

                <BackgroundIcon 
                    className="w-[70rem] h-full absolute top-0 left-0 z-0" 
                    backgroundSvgIcon={<LeftBackgroundOval className="w-full h-full" />} 
                />
            </div>

        </div>
    )
}

export default Loading