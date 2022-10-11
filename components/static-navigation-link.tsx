import Link from 'next/link';
import React from 'react';
import { NAVIGATION_TYPE } from '../types/enums';
import { motion } from 'framer-motion';
import { useMainContainer } from '../state/main';


type Props = {
    id?: number;
    index?: number;
    name: string;
    icon?: string;
    className?: string;
    style?: React.CSSProperties;
    type: NAVIGATION_TYPE;
    handleClick: () => void;
};


const StaticNavigationLink = (props: Props) => {

    const { id, index, name, icon, className, style, type, handleClick } = props;

    const { toggleNavigationModal } = useMainContainer();
    
    return (
        <div className="flex flex-row items-center" draggable="false" >
            <motion.button
                initial={{scale: 1}}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={toggleNavigationModal}
                className={`
                    relative flex flex-row items-center justify-center outline-0 outline-none w-full h-full 
                    py-1 small-xs:py-2 medium-xs:py-2.5
                    px-2 small-xs:px-3 medium-xs:px-5
                    text-sm font-medium text-black dark:text-white hover:tracking-widest transition-all ease-linear ${className}`} 
                style={style}
            >
                {name}
            </motion.button>
        </div>
    )
}

export default StaticNavigationLink