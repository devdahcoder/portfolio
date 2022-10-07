import React from 'react';
import Link from 'next/link';
import { headerNavigation } from '../context/header-navigation';
import { HeaderNavigation } from '../types';
import { motion } from 'framer-motion';
import { useMainContainer } from '../state/main';
import BackgroundGradient from './background-gradient';
import NavigationGrid from './navigation-grid';
import NavigationModalList from './navigation-modal-list';



type Props = {}

const modalVariant = {
    hidden: { opacity: 0, transition: { delay: 2 } },
    visible: { opacity: 1 }
}


const NavigationModal = (props: Props) => {

    const { navigationModal } = useMainContainer();

    return (
        <motion.div 
            variants={modalVariant}
            initial="hidden"
            animate={navigationModal ? "visible" : "hidden"}
            className={`overflow-y-scroll custom-sidebar fixed left-0 top-0 w-full h-full z-30 ${navigationModal ? "pointer-events-auto" : "pointer-events-none"}`}
        >

            <NavigationGrid />

            <NavigationModalList />
            
        </motion.div>
    )
}

export default NavigationModal