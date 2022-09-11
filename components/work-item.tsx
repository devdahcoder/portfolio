import React from 'react'
import { myWork } from '../context/work';
import SocialMediaLink from './social-media-link';
import { BsArrowUpRight } from 'react-icons/bs';
import { linkClassName, linkIconContainer } from '../styles/global-style';

type Props = {
    modIndex?: number;
    index: number;
}

const WorkItem = (props: Props) => {
    
    const { modIndex, index } = props;

    const currentItem = myWork[index];

    return (
        <div 
            key={index}
            className="
                w-full min-w-[30rem] h-full flex flex-col items-start 
                border-2 border-green-200 select-none cursor-pointer
                pl-6 
                pr-8
                pt-9 
                pb-6 
                space-y-4 small-mid:space-y-5 mr-5"
            >

            <div className="text-7xl font-medium text-green-200">
                <p>{currentItem?.header}</p>
            </div>
            {/* <div className="text-3xl small-xs:text-4xl medium-xs:text-5xl large-sm:text-6xl font-medium text-green-200">
                <p>{currentItem?.header}</p>
            </div> */}

            <div className="font-inter text-xs text-black dark:text-white tracking-wider">
                <p>
                    An emergency app which give users the ability to - on the spot- report emergency cases near them as happening at exact time of reporting.
                </p>
            </div>

            <div>
                <SocialMediaLink 
                    text={"Casestudy"} 
                    href={`https://twitter.com/devdahcoder`} 
                    icon={<BsArrowUpRight className={`w-3 h-3`} />} 
                    className={`border`}
                    linkClassName={`pl-0 pr-2 py-0.5 font-medium`} 
                    iconContainerClassName={`${linkIconContainer} ml-2`}
                />
            </div>

        </div>
    )
}

export default WorkItem