import React from 'react';
import { motion } from 'framer-motion';

type Props = {Icon: () => JSX.Element, className?: string, style?: React.CSSProperties, href?: string}

const SocialMediaIcon = (props: Props) => {
    const {Icon, className, style, href} = props;
    return (
        <motion.div 
            initial={{scale: 1}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <a style={style} className={`rounded-md p-2 flex flex-col items-center justify-center ${className}`} role="button" href={`http://${href}`} target="_blank" rel="noopener noreferrer">
                <Icon />
            </a>
        </motion.div>
    )
}

export default SocialMediaIcon