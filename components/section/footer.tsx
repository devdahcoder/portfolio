import React from 'react';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import Logo from '../logo';
import SocialMediaIcon from '../social-media-icon';

type Props = {}

const Footer = (props: Props) => {

    return (
        <div className="py-10">
            <div className="flex flex-col medium-xs:flex-row space-y-6 medium-xs:space-y-0 justify-between 
                items-center px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20">
                    
                <div className="flex flex-row items-center justify-center space-x-5 ">
                    <SocialMediaIcon Icon={() => <BsFacebook />} />
                    <SocialMediaIcon Icon={() => <BsTwitter />} />
                    <SocialMediaIcon Icon={() => <BsGithub />} />
                    <SocialMediaIcon Icon={() => <BsLinkedin />} />
                </div>

                <div className=" font-inter font-medium flex flex-row flex-wrap items-center justify-center">
                    <span className="text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400">Designed by</span> <span>
                        
                        <a className="underline mx-1 text-black dark:text-white" href="https://twitter.com/itzareous" target="_blank" rel="noopener noreferrer">Areous</a></span> <span className="text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400">Dev by</span>
                        <span><a className="underline mx-1 text-black dark:text-white" href="https://twitter.com/devdahcoder" target="_blank" rel="noopener noreferrer">Olamide</a></span>
                </div>

            </div>
        </div>
    )
}

export default Footer
