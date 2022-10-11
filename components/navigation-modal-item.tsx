import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMainContainer } from '../state/main';

type Props = {
    index: number;
    id: number;
    href: string;
    name: string;
}

const navigationVariant = {
    hidden: { 
        opacity: 0, 
        y: "100%" 
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

const NavigationModalItem = (props: Props) => {

    const { href, id, index, name } = props;

    const { navigationModal, toggleNavigationModal } = useMainContainer();

    return (
        <motion.li 
            variants={navigationVariant}
            className="border-b flex flex-row items-center justify-start medium-xs:justify-center
            ">
            <Link href={href}>
                <a onClick={toggleNavigationModal} className="w-fit flex flex-row items-center justify-center font-ogg py-5">
                    <span className="pl-5 pr-10 text-base py-2">{id > 9 ? '' : '0'}{id}.</span> 
                    <div className="w-fit text-transparent bg-clip-text 
                        bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                        dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400
                        flex flex-row items-center justify-center flex-wrap capitalize font-medium text-4xl small-large:text-6xl medium-xs:text-7xl large-xs:text-8xl">
                        {name}.
                    </div>
                </a>
            </Link>
        </motion.li>
    )
}

export default NavigationModalItem