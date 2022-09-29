import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { talks } from '../context/talks';
import TalkItem from './talk-item';


type Props = {}

const itemContainerVariant = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { ease: "easeInOut", delay: 1 },
        when: "beforeChildren",
        delayChildren: 5
    },
}

const TalkList = (props: Props) => {

    return (
        <motion.div 
            // variants={itemContainerVariant}
            // initial="hidden"
            // whileInView="visible"
            className="space-y-5">
            {
                talks.map(({ id, year, talkList }, index) => {
                    return (<TalkItem key={index} id={id} year={year} talkList={talkList} />)
                })
            }
        </motion.div>
    )
}

export default TalkList