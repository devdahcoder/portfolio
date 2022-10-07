import React from 'react'
import { motion } from 'framer-motion';
import { useMainContainer } from '../state/main';
import { HeaderNavigation } from '../types';
import Link from 'next/link';
import { headerNavigation } from '../context/header-navigation';
import NavigationModalItem from './navigation-modal-item';

type Props = {}

const navigationVariant = {
    hidden: { 
        opacity: 0,
        transition: {
            delay: 0.4,
            ease: "easeInOut",
            delayChildren: 0.4,
            // staggerChildren: 0.1,
        }
    },
    visible: { 
        opacity: 1,
        // scale: 1,
        transition: {
            delay: 1.5,
            ease: "easeInOut",
            delayChildren: 1.5,
            staggerChildren: 0.3,
        }
    }
}

const NavigationModalList = (props: Props) => {

    const { navigationModal } = useMainContainer();

    return (
        <motion.div
            className={`absolute flex z-50 w-full h-full ${ navigationModal ? "pointer-events-auto" : "pointer-events-none" }`}
            variants={navigationVariant}
            initial="hidden"
            animate={ navigationModal ? "visible" : "hidden" }
        >
            <div className="w-full mb-0 mx-auto mt-24">
                <ul className="flex flex-col">
                    {
                        headerNavigation.slice(0, -1)?.map((navigation: HeaderNavigation, index: number) => {
                            const { href, id, name, type, className, style, subNavigation } = navigation;
                            return (
                                <NavigationModalItem key={index} href={href} id={id} index={index} name={name} />
                            )
                        })
                    }
                </ul>
            </div>
        </motion.div>
    )
}

export default NavigationModalList