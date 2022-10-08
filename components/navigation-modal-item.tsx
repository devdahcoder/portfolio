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

    const { navigationModal } = useMainContainer();

    return (
        <motion.li 
            variants={navigationVariant}
            className="border-b flex flex-row items-center justify-start medium-xs:justify-center
            ">
            <Link href={href}>
                <a className="w-fit flex flex-row items-center justify-center font-ogg py-5">
                    <span className="pl-5 pr-10 text-base py-2">{id > 9 ? '' : '0'}{id}.</span> 
                    <div className="text-transparent w-fit bg-clip-text 
                        bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                        flex flex-row items-center justify-center flex-wrap capitalize font-medium text-4xl small-large:text-6xl medium-xs:text-7xl large-xs:text-8xl">
                        {name}.
                    </div>
                </a>
            </Link>
        </motion.li>
    )
}

export default NavigationModalItem