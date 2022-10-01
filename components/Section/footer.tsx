import React from 'react';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import Logo from '../logo';
import SocialMediaIcon from '../social-media-icon';

type Props = {}

const Footer = (props: Props) => {

    return (
        <div className="py-10">
            <div className="flex flex-row items-center justify-between px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20">
                <div className="flex row items-center">
                    <SocialMediaIcon Icon={() => <BsFacebook />} />
                    <SocialMediaIcon Icon={() => <BsTwitter />} />
                    <SocialMediaIcon Icon={() => <BsGithub />} />
                    <SocialMediaIcon Icon={() => <BsLinkedin />} />
                </div>

                <div className="font-inter font-medium flex flex-row">
                    <span>Designed by</span> <span>
                        
                        <a className="underline mx-1" href="https://twitter.com/itzareous" target="_blank" rel="noopener noreferrer">Areous</a></span> <span>Dev by</span>
                        <span><a className="underline mx-1 " href="https://twitter.com/devdahcoder" target="_blank" rel="noopener noreferrer">Olamide</a></span>
                </div>

                <div className="flex flex-row items-center">
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Footer