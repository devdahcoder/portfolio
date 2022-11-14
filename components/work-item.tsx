// import React from 'react'
// import { myWork } from '../context/work';
// import SocialMediaLink from './social-media-link';
// import { BsArrowUpRight } from 'react-icons/bs';
// import { linkClassName, linkIconContainer } from '../styles/global-style';

// type Props = {
//     modIndex?: number;
//     index: number;
// }

// const WorkItem = (props: Props) => {
    
//     const { modIndex, index } = props;

//     const currentItem = myWork[index];

//     return (
//         <div 
//             key={index}
//             className="
//                 group relative rounded-sm w-full min-w-[26rem] medium-sm:min-w-[28rem] large-xs:min-w-[30rem] h-full flex flex-col items-start 
//                 border-2 border-green-200 select-none cursor-pointer transition-all ease-linear duration-500
//                 pl-6 
//                 pr-8
//                 pt-9 
//                 pb-6 
//                 mr-5"
//             >

//             <div className="absolute left-0 top-0 w-0 opacity-0 h-full bg-green-200 transition-all duration-500 ease-linear group-hover:w-full group-hover:opacity-100"></div>

//             <div className="text-5xl small-mid:text-6xl large-xs:text-7xl font-medium text-green-200 w-full 
//             overflow-hidden text-ellipsis whitespace-nowrap mb-5">
//                 {currentItem?.header}
//             </div>

//             <div className="font-inter text-xs small-xs:text-sm text-black dark:text-white tracking-wider pr-8 mb-14">
//                 <p>
//                     An emergency app which give users the ability to - on the spot- report emergency cases near them as happening at exact time of reporting.
//                 </p>
//             </div>

//             <div className="absolute left-6 bottom-6 z-10">
//                 <SocialMediaLink 
//                     text={"Website Link"} 
//                     href={`https://twitter.com/devdahcoder`} 
//                     icon={<BsArrowUpRight className={`w-3 h-3`} />} 
//                     className={``}
//                     linkClassName={`pl-0 pr-2 py-0.5 font-medium text-base tracking-wide dark:text-white`} 
//                     iconContainerClassName={`${linkIconContainer} ml-2`}
//                 />
//             </div>

//         </div>
//     )
// }

// export default WorkItem


import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { myWork } from '../context/work';
import { linkClassName, linkIconContainer } from '../styles/global-style';
import SocialMediaLink from './social-media-link';


type Props = {
    modIndex?: number;
    index: number;
}

const workItemVariant = {
    hidden: { 
        x: "100%", 
        opacity: 0 
    },
    visible: { 
        x: 0, 
        opacity: 1,
    }
}

const WorkItem = (props: Props) => {
    
    const { modIndex, index } = props;

    const currentItem = myWork[index];

    return (
        <motion.div 
            variants={workItemVariant}
            key={index}
            className="
                group relative rounded-sm w-full min-w-[26rem] medium-sm:min-w-[28rem] large-xs:min-w-[30rem] h-full flex flex-col  
                border-2 border-green-200 select-none cursor-pointer transition-all ease-linear duration-500
                mr-5 p-5 space-y-4
                
                "
            >

            <div className="flex flex-row items-center justify-between text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400">
                <div className="font-machina font-semibold text-2xl">
                    <p>KaseFile</p>
                </div>

                <div className="font-machina text-sm">
                    <p>NG</p>
                </div>
            </div>

            <div className="font-inter tracking-wider text-base pb-11 text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum ab tempore iste, eos distinctio enim perferendis dignissimos, incidunt eius rem ipsam quia at aperiam facere officia nihil? Mollitia, quod.</p>
            </div>

            <div className="flex flex-row items-center justify-between">
                <div className="font-machina text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400">
                    <p>20/20/2011</p>
                </div>

                <div>
                    <SocialMediaLink 
                        text={"Website Link"} 
                        href={`https://twitter.com/devdahcoder`} 
                        linkClassName={`font-machina ${linkClassName}`} 
                        icon={<BsArrowUpRight />}
                        iconContainerClassName={`${linkIconContainer}`}
                    />
                </div>
            </div>

        </motion.div>
    )
}

export default WorkItem