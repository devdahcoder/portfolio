import { motion } from 'framer-motion';
import React, { useState, useRef, RefObject } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { CloseOnEventListen } from '../hooks';
import { TalkList } from '../types';


type Props = {
    id: number;
    index: number;
    year: string;
    talkList: TalkList[];
}


const talkItemVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: {
            delay: 0.6,
            ease: "easeInOut"
        }
    }
}
const talkVariant = {
    open: { 
        opacity: 1,
        transition: (index: number) => ({
            delay: index * 0.3
        })
    },
    close: { opacity: 0 }
}

const TalkItem = (props: Props) => {

    const { id, index, year, talkList } = props;
    const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
    const [currentAccordionIndex, setCurrentAccordionIndex] = useState<number>(0);
    const refElement = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
    CloseOnEventListen(refElement, setIsAccordionOpen);

    return (
        <motion.div 
            variants={talkItemVariant}
            initial="hidden"
            whileInView="visible"
            className="">
            <div 
                ref={refElement}
                onClick={() => setIsAccordionOpen(!isAccordionOpen)} 
                role={"button"} 
                className="group flex flex-row items-center justify-between border-b py-1 cursor-pointer"
                >
                <div className="text-6xl font-normal opacity-60">
                    <p>{year}</p>
                </div>

                <div className="flex items-center justify-center">
                    <button className=" flex items-center justify-center min-w-fit w-7 h-7">
                        <IoIosArrowDown className="opacity-60" />
                    </button>
                </div>
            </div>

            <div className={`transition-all duration-500 ease-in-out ${isAccordionOpen ? 'h-60 ' : 'overflow-y-hidden h-0'} `}>
                <motion.div 
                    whileInView={isAccordionOpen ? "open" : "close"}
                    variants={talkVariant}
                    custom={index}

                    className={`py-3 font-inter space-y-3 `}>
                    {
                        talkList.map(({ id, talkTitle, eventTitle, eventLink, eventDate }, index) => (
                            <div key={index} className="flex flex-col justify-start items-start text-sm">
                                <div className="flex flex-row items-center flex-wrap"><p>{eventTitle}</p></div>
                                <div className="flex flex-row items-center flex-wrap">
                                    <div className="flex flex-row items-center flex-wrap">
                                        <div>
                                            <p>{talkTitle}</p>
                                        </div>
                                        <div>
                                            <p>2018</p>
                                        </div>
                                    </div>
                                    <span className="mx-1">•</span>
                                    <div>
                                        <p>{eventDate}</p>
                                    </div>
                                    <span className="mx-1">•</span>
                                    <span><a className="underline" href={`http://${eventLink}`} target="_blank" rel="noopener noreferrer">See Presentation</a></span>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}

export default TalkItem