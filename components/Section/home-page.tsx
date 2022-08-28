/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NameStrike from '../../public/icons/name-strike'
import SocialMediaLink from '../social-media-link'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div className="flex flex-row pt-40 relative w-[90%] my-0 mx-auto space-x-32">
            <div className="flex flex-col space-y-8 w-full max-w-[60%] select-none">
                <div className="group text-8xl font-medium relative cursor-pointer">
                    <p>Hi, I am Olamide 
                    <NameStrike 
                        className="absolute -bottom-1 right-8 -z-50 opacity-0 group-hover:opacity-100 transition-all delay-100
                        ease-in-out duration-500" 
                    />
                    </p>
                </div>
                <div className="font-work-sans text-xl font-medium -tracking-wide pr-28">
                    <p>
                    I’m a Senior Product Designer (UI, UX), and a Design mentor. I am
                    passionate about creating a user-centered design, gathering and
                    translating user data into design decisions and products.
                    </p>
                </div>
                <div className="flex flex-row items-center space-x-5">
                    <SocialMediaLink text={"Resume"} />
                    <SocialMediaLink text={"GitHub"} />
                    <SocialMediaLink text={"Linkedin"} />
                </div>
            </div>

            <div className="w-full max-w-[18rem] h-[35rem]">
                <div
                    className="group !relative border-black bg-black w-full max-w-[18rem] h-[21rem] flex items-center justify-center 
                    rounded-t-full border mt-16"
                >
                    <div
                        className="z-10 absolute -left-2 top-5 py-3 px-5 rounded-t-full rounded-bl-full text-black text-xs font-semibold 
                        w-fit font-inter bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-300
                        ease-in-out duration-500"
                    >
                        <p>Hi, I am Olamide</p>
                    </div>
                    <div
                        className="z-0 w-[18rem] h-fit absolute -right-3 top-5  rounded-t-full rounded-b-full group-hover:top-20 transition-all 
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