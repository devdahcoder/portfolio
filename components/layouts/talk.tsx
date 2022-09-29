import React from 'react';
import ContainerLayout from '../container-layout';
import SectionHeader from '../section-header';
import TalkList from '../talk-list';
import { motion } from 'framer-motion';


type Props = {}

const talkContainerVariant = {
    hidden: { x: -200, opacity: 0 },
    visibility: { x: 0, opacity: 1 }
}

const Talk = (props: Props) => {
    return (
        <div className="border border-black py-28">
            <ContainerLayout 
                className="px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20 space-y-14">

                    <motion.div 
                        variants={talkContainerVariant}
                        initial="hidden"
                        whileInView="visibility"
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="flex flex-col medium-xs:flex-row">
                        <div className="w-full flex-grow">
                            <SectionHeader containerClassName={""} headerText={"Public Speaking"} sectionTitle={"Talks"} />
                        </div>


                        <div className="font-work-sans mr-auto w-[80%] small-xs:w-full text-sm" dir="rtl">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra praesent nisi tempor pharetra vel. Est nisl id ornare condimentum diam nunc suspendisse.</p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col">
                        <TalkList />
                    </div>
            </ContainerLayout>
        </div>
    )
}

export default Talk