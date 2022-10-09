/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NameStrike from '../../public/icons/name-strike';
import SocialMediaLink from '../social-media-link';
import { BsArrowUpRight } from 'react-icons/bs';
import { linkClassName, linkIconContainer } from '../../styles/global-style';
import WavingMemoji from '../../public/icons/waving-memoji';
import ContainerLayout from '../container-layout';
import { motion } from 'framer-motion';


type Props = {
    name: string;
    hasPageFullyLoaded: boolean;
}

const HomePage = (props: Props) => {

    const { hasPageFullyLoaded, name } = props;

    const splitName = name && name?.split("");

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-200%" },
    }

    const memojiVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <section className="pb-20">
            <ContainerLayout className="large-xs:flex-row items-center large-xs:items-start
                justify-center large-sm:justify-between 
                px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20
                pt-16 medium-xs:pt-24 medium-sm:pt-32 large-sm:pt-40 ">
                    
                <div className="flex flex-col w-full large-sm:grow
                    space-y-4 small-xs:space-y-5 small-mid:space-y-8
                    select-none transition-all ease-in-out duration-500"
                >

                    <div className="
                            group font-medium relative cursor-text 
                            text-5xl small-xs:text-6xl medium-sm:text-[4rem] large-sm:text-7xl extra-large-mid:text-8xl
                            min-w-fit"
                    >

                        <motion.div 
                            className="medium-xs:flex medium-xs:flex-row medium-xs:items-center
                            text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400
                            "
                        >

                            Hi, I am 

                            <div className="
                                text-transparent bg-clip-text 
                                bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                                dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400
                                flex flex-row w-fit relative pt-5 medium-xs:pt-0 medium-xs:ml-2 extra-large-xs:ml-4">

                                    {splitName && splitName.map((name, index: number) => {
                                        return (
                                            <motion.span 
                                                key={index}
                                                className="hover:text-green-200 transition-all ease-in-out duration-500"
                                            >
                                                {name}
                                            </motion.span>
                                        )
                                    })}

                                <NameStrike 
                                    className="
                                        absolute -bottom-1 right-0 z-0 opacity-0 w-full group-hover:opacity-100 
                                        group-hover:z-10 transition-all ease-in-out duration-700" 
                                />

                            </div>

                        </motion.div>
                        
                    </div>


                    <div className="
                        font-work-sans transition-all duration-500 ease-linear
                        w-full large-sm:max-w-[90%] extra-large-mid:max-w-[78%]
                        small-xs:text-base large-sm:text-lg 
                        large-sm:pr-5
                        text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400
                        "
                    >
                        <p>

                            “Hello stranger! 👋, my name is {name} and I am a frontend engineer who is
                                passionate about creating beautiful and intuitive user interfaces and experiences 
                                for web and mobile applications, also gathering and
                                translating user data into design decisions and products..”

                        </p>

                    </div>

                    <div className="flex flex-row items-center justify-between medium-xs:justify-start medium-xs:space-x-7">

                        <SocialMediaLink 
                            text={"Twitter"} 
                            href={`https://twitter.com/devdahcoder`} 
                            linkClassName={linkClassName} 
                            icon={<BsArrowUpRight />}
                            iconContainerClassName={linkIconContainer}
                        />

                        <SocialMediaLink 
                            text={"GitHub"} 
                            href={`https://github.com/devdahcoder`} 
                            linkClassName={linkClassName} 
                            icon={<BsArrowUpRight />}
                            iconContainerClassName={linkIconContainer}
                        />

                        <SocialMediaLink 
                            text={"Linkedin"} 
                            href={`https://www.linkedin.com/in/olamide-adigun-200/`} 
                            linkClassName={linkClassName} 
                            icon={<BsArrowUpRight />}
                            iconContainerClassName={linkIconContainer}
                        />

                    </div>

                </div>


                <div className="flex flex-col items-center transition-all ease-in-out duration-500  w-full max-w-[23rem]">
                    <motion.div
                        variants={memojiVariant}
                        initial="hidden"
                        whileInView={hasPageFullyLoaded ? "visible" : "hidden"}
                        viewport={{ once: true }}
                        className="
                            group relative border-black bg-black dark:border-white dark:bg-white 
                            w-full max-w-[19rem]
                            h-[17rem] small-xs:h-[24rem]
                            flex items-center justify-center rounded-t-full mt-16 transition-all
                            ease-in-out duration-500"
                    >
                        <div
                            className="z-10 absolute 
                            -left-3 small-xs:-left-2 small-mid:left-0
                            top-48 small-xs:top-64 small-mid:top-60
                            py-2 small-xs:py-3
                            px-3 small-xs:px-5
                            border rounded-tl-full rounded-b-full text-black text-xs font-semibold 
                            w-fit font-inter bg-white invisible opacity-0 
                            group-hover:visible group-hover:opacity-100 transition-all duration-700
                            ease-in-out"
                        >
                            <p>Hi, I am Olamide</p>
                        </div>
                        <motion.div
                            
                            className=" 
                                z-0 border-white
                                w-[11rem] small-xs:w-[16rem] small-mid:w-[17rem] large-sm:w-[18.5rem]
                                h-fit absolute 
                                left-12 large-sm:left-14
                                bottom-0
                                rounded-t-full "
                        >
                            <img
                                className="w-full h-full object-contain"
                                src="./images/wave.png"
                                alt="memoji"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </ContainerLayout>
        </section>
    )
}

export default HomePage