/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NameStrike from '../../public/icons/name-strike';
import SocialMediaLink from '../social-media-link';
import { BsArrowUpRight } from 'react-icons/bs';
import { linkClassName, linkIconContainer } from '../../styles/global-style';
import WavingMemoji from '../../public/icons/waving-memoji';

type Props = {}

const HomePage = (props: Props) => {


    return (
        <section className="
                flex flex-col large-xs:flex-row items-center medium-xs:items-start justify-center large-sm:justify-between 
                relative 
                px-4 small-large:px-5 medium-sm:px-10 extra-large-xs:px-20 
                pt-16 medium-xs:pt-24 medium-sm:pt-20 large-sm:pt-40">

            <div className="border
                flex flex-col w-full large-sm:grow
                space-y-4 small-xs:space-y-5 small-mid:space-y-8 medium-xs:space-y-10
                select-none text-black dark:text-white transition-all ease-in-out duration-500"
            >

                <div className="
                        group font-medium relative cursor-pointer 
                        text-4xl small-xs:text-5xl medium-xs:text-6xl large-sm:text-7xl extra-large-mid:text-8xl
                        min-w-fit"
                >

                    <div className="medium-xs:flex medium-xs:flex-row medium-xs:items-center">

                        Hi, I am 

                        <div className=" w-fit relative pt-5 medium-xs:pt-0 medium-xs:ml-2 extra-large-xs:ml-4">

                                Olamide

                            <NameStrike 
                                className="
                                    absolute -bottom-1 right-0 z-0 opacity-0 w-full group-hover:opacity-100 
                                    group-hover:z-10 transition-all ease-in-out duration-700" 
                            />

                        </div>

                    </div>
                    
                </div>

                <div className="
                    font-work-sans font-light dark:font-light tracking-wider leading-5
                    w-full large-sm:max-w-[90%] extra-large-mid:max-w-[78%]
                    text-xs small-mid:text-sm medium-sm:text-base large-sm:text-lg extra-large-xs:text-xl
                    large-sm:pr-5"
                >

                    <p>

                        “I’m a Product Designer (UI, UX), and a Software Engineer. I am
                        passionate about creating a user-centered design, problem solving, gathering and
                        translating user data into design decisions and products.”

                    </p>

                </div>

                <div className="flex flex-row items-center justify-between small-mid:justify-start small-mid:space-x-7">

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

            <div className="border
                    flex flex-col items-center h-[35rem]
                    w-full large-xs:max-w-[20rem] extra-large-xs:max-w-[23rem]"
            >
                <div
                    className="
                        group relative border-black bg-black dark:border-white dark:bg-white 
                        w-full max-w-[19rem] medium-xs:max-w-[25rem] large-xs:max-w-[17.5rem] large-sm:max-w-[19rem]
                        h-[14rem] small-xs:h-[19.5rem] small-mid:h-[20.7rem] medium-xs:h-[25rem] large-xs:h-[20rem] large-sm:h-[22rem]
                        flex items-center justify-center rounded-t-full mt-16 transition-all
                        ease-in-out duration-500"
                >
                    <div
                        className="z-10 absolute -left-2 top-48 border py-3 px-5 rounded-tl-full rounded-b-full text-black text-xs font-semibold 
                        w-fit font-inter bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-700
                        ease-in-out"
                    >
                        <p>Hi, I am Olamide</p>
                    </div>
                    <div
                        className=" 
                            z-0 border-white
                            w-[10rem] small-xs:w-[14rem] small-mid:w-[15rem] medium-xs:w-[19rem] large-xs:w-[17rem] large-sm:w-[18.5rem]
                            h-fit absolute left-1/2 large-sm:left-14
                            bottom-0
                            rounded-t-full "
                    >
                        {/* group-hover:top-20 transition-all 
                        delay-100 duration-500 ease-in-out */}
                        <img
                            className="w-full h-full object-contain"
                            src="./images/wave.png"
                            alt="memoji"
                        />
                        {/* <WavingMemoji className={`rounded-t-full border w-fit`} /> */}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomePage

































// <div className="
//                     flex flex-col items-center h-[35rem]
//                     w-full large-xs:max-w-[20rem] extra-large-xs:max-w-[23rem]"
//             >
//                 <div
//                     className="
//                         group relative border-black bg-black dark:border-white dark:bg-white 
//                         w-full max-w-[19rem] medium-xs:max-w-[25rem] large-xs:max-w-[17.5rem] large-sm:max-w-[18.5rem]
//                         h-[14rem] small-xs:h-[19.5rem] small-mid:h-[20.7rem] medium-xs:h-[25rem] large-xs:h-[20rem] large-sm:h-[22rem]
//                         flex items-center justify-center rounded-t-full mt-16 transition-all
//                         ease-in-out duration-500"
//                 >
//                     <div
//                         className="z-10 absolute -left-2 top-8 border py-3 px-5 rounded-t-full rounded-bl-full text-black text-xs font-semibold 
//                         w-fit font-inter bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-300
//                         ease-in-out duration-500"
//                     >
//                         <p>Hi, I am Olamide</p>
//                     </div>
//                     <div
//                         className="
//                             z-0 border-white
//                             w-[10rem] small-xs:w-[14rem] small-mid:w-[15rem] medium-xs:w-[19rem] large-xs:w-[17rem] large-sm:w-[18.5rem]
//                             h-fit absolute left-1/2 large-sm:left-2 -translate-x-1/2 large-sm:translate-x-0
//                             top-[2.8rem] small-xs:top-16 large-xs:top-5 large-sm:top-6
//                             rounded-t-full rounded-b-full group-hover:top-20 transition-all 
//                         delay-100 duration-500 ease-in-out"
//                     >
//                         {/* <img
//                             className="w-full h-full object-contain"
//                             src="./images/memoji.png"
//                             alt="memoji"
//                         /> */}
//                         <WavingMemoji />
//                     </div>
//                 </div>
//             </div>