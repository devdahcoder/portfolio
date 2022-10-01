import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const ContainerLayout = (props: Props) => {
    return (
        <motion.div 
            style={props?.style} 
            className={`flex flex-col w-full relative ${props?.className}`}>
            {props?.children}
        </motion.div>
    )
}

export default ContainerLayout