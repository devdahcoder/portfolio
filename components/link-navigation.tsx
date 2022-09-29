import Link from 'next/link';
import React from 'react';
import { useMainContainer } from '../state/main';
import { NAVIGATION_TYPE } from '../types/enums';
import { motion } from 'framer-motion';

type Props = {
    id?: number;
    index?: number;
    name: string;
    href: string;
    icon?: string;
    className?: string;
    style?: React.CSSProperties;
    type: NAVIGATION_TYPE;
}

const linkNavigationVariant = {
    hidden: { y: -20, opacity: 0 },
    visible: (index: number) => ({ 
        y: 0, 
        opacity: 1,
        transition: {
            delay: index * 0.3,
            ease: "easeInOut",
        }
    })
}

const LinkNavigation = (props: Props) => {

    const { index, name, href, className, style } = props;

    const { hasPageFullyLoaded } = useMainContainer();

    return (
        <motion.div 
            custom={index}
            variants={linkNavigationVariant}
            initial="hidden"
            animate={hasPageFullyLoaded ? "visible" : "hidden"}
            className="hidden large-sm:flex flex-row items-center" draggable="false" >
            <Link href={href}>
                <a 
                    className={`relative flex flex-row items-center justify-center w-full h-full py-2 px-3
                        text-sm font-medium transition-all delay-100 ease-linear text-black dark:text-white ${className}`} 
                    style={style}
                >
                    {name}
                </a>
            </Link>
        </motion.div>
    )
}

export default LinkNavigation