/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NameStrike from '../../public/icons/name-strike'
import SocialMediaLink from '../social-media-link'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div className="flex flex-col extra-large-xs:flex-row items-center medium-xs:items-start justify-center relative w-full px-4
                small-large:px-5 medium-sm:px-10 extra-large-xs:px-20 pt-10 medium-xs:pt-14 medium-sm:pt-20 large-sm:pt-40">
            <div className="flex flex-col space-y-3 small-large:space-y-5 small-mid:space-y-8 large-sm:space-y-10 w-full 
                medium-xs:max-w-[80%] extra-large-xs:max-w-[80%] border select-none text-black dark:text-white transition-all
                        ease-in-out duration-500">
                <div className="group text-4xl small-xs:text-5xl medium-xs:text-6xl large-sm:text-8xl extra-large-xs:text-7xl
                    font-medium relative cursor-pointer min-w-fit max-w-44 ">
                    <div className="medium-xs:flex medium-xs:flex-row medium-xs:items-center">Hi, I am 
                        <div className="w-fit relative pt-5 medium-xs:pt-0 medium-xs:ml-2">Olamide
                            <NameStrike 
                                className="absolute -bottom-1 right-0 z-0 opacity-0 w-full group-hover:opacity-100 group-hover:z-10 transition-all
                                ease-in-out duration-700" 
                            />
                        </div> 
                    
                    </div>
                </div>


                <div className="font-work-sans text-xs small-large:text-sm medium-sm:text-base large-sm:text-lg medium-xs:pr-3 
                    large-sm:pr-28 extra-large-xs:pr-16 font-light dark:font-light tracking-wider leading-5">
                    <p>
                        I’m a Product Designer (UI, UX), and a Software Engineer. I am
                        passionate about creating a user-centered design, problem solving, gathering and
                        translating user data into design decisions and products.
                    </p>
                </div>

                <div className="flex flex-row items-center justify-between small-mid:justify-start small-mid:space-x-7">
                    <SocialMediaLink text={"Resume"} />
                    <SocialMediaLink text={"GitHub"} />
                    <SocialMediaLink text={"Linkedin"} />
                </div>
            </div>

            <div className="w-full flex flex-col items-center h-[35rem]">
                <div
                    className=" group !relative border-black bg-black dark:border-white dark:bg-white w-full max-w-[19rem] medium-xs:max-w-[25rem]
                    h-[15rem] small-xs:h-[19rem] small-mid:h-[20rem] medium-xs:h-[25rem] flex items-center justify-center 
                    rounded-t-full border mt-16 transition-all
                        ease-in-out duration-500"
                >
                    <div
                        className="z-10 absolute -left-2 top-8 py-3 px-5 rounded-t-full rounded-bl-full text-black text-xs font-semibold 
                        w-fit font-inter bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-300
                        ease-in-out duration-500"
                    >
                        <p>Hi, I am Olamide</p>
                    </div>
                    <div
                        className="z-0 w-[10rem] small-xs:w-[13rem] small-mid:w-[14rem] medium-xs:w-[19rem] h-fit absolute left-1/2 -translate-x-1/2 top-16  rounded-t-full rounded-b-full group-hover:top-20 transition-all 
                        delay-100 duration-500 ease-in-out"
                    >
                        <img
                            className="w-full h-full object-contain"
                            src="./images/memoji.png"
                            alt="memoji"
                        />
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default HomePage

















// /* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import NameStrike from '../../public/icons/name-strike'
// import SocialMediaLink from '../social-media-link'

// type Props = {}

// const HomePage = (props: Props) => {
//     return (
//         <div className="flex flex-row pt-40 relative w-[90%] my-0 mx-auto space-x-32">
//             <div className="flex flex-col space-y-8 w-full max-w-[60%] select-none text-black dark:text-white transition-all
//                         ease-in-out duration-500">
//                 <div className="group text-8xl font-medium relative cursor-pointer">
//                     <p>Hi, I am Olamide 
//                     <NameStrike 
//                         className="absolute -bottom-1 right-8 z-0 opacity-0 group-hover:opacity-100 group-hover:z-10 transition-all
//                         ease-in-out duration-700" 
//                     />
//                     </p>
//                 </div>
//                 <div className="font-work-sans text-xl font-light dark:font-light -tracking-wide pr-28">
//                     <p>
//                         I’m a Product Designer (UI, UX), and a Software Engineer. I am
//                         passionate about creating a user-centered design, problem solving, gathering and
//                         translating user data into design decisions and products I’m amazing.
//                     </p>
//                 </div>
//                 <div className="flex flex-row items-center space-x-5">
//                     <SocialMediaLink text={"Resume"} />
//                     <SocialMediaLink text={"GitHub"} />
//                     <SocialMediaLink text={"Linkedin"} />
//                 </div>
//             </div>

//             <div className="w-full max-w-[18rem] h-[35rem]">
//                 <div
//                     className="group !relative border-black bg-black dark:border-white dark:bg-white w-full max-w-[18rem] 
//                     h-[21rem] flex items-center justify-center 
//                     rounded-t-full border mt-16 transition-all
//                         ease-in-out duration-500"
//                 >
//                     <div
//                         className="z-10 absolute -left-2 top-5 py-3 px-5 rounded-t-full rounded-bl-full text-black text-xs font-semibold 
//                         w-fit font-inter bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-300
//                         ease-in-out duration-500"
//                     >
//                         <p>Hi, I am Olamide</p>
//                     </div>
//                     <div
//                         className="z-0 w-[18rem] h-fit absolute -right-3 top-5  rounded-t-full rounded-b-full group-hover:top-20 transition-all 
//                         delay-100 duration-500 ease-in-out"
//                     >
//                         <img
//                             className="w-full h-full object-contain"
//                             src="./images/memoji.png"
//                             alt="memoji"
//                         />
//                     </div>
//                 </div>
//             </div>

            
//         </div>
//     )
// }

// export default HomePage