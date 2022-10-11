import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { talks } from '../context/talks';
import TalkItem from './talk-item';


type Props = {}

const itemContainerVariant = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { 
            ease: "easeInOut", 
            delayChildren: 0.8,
            staggerChildren: 0.3,
        },
    },
}

const TalkList = (props: Props) => {

    return (
        <motion.div 
            variants={itemContainerVariant}
            initial="hidden"
            whileInView="visible"
            className="space-y-5">
            {
                talks.map(({ id, year, talkList }, index) => {
                    return (<TalkItem key={index} index={index} id={id} year={year} talkList={talkList} />)
                })
            }
        </motion.div>
    )
}

export default TalkList