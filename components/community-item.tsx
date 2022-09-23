/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { community } from '../context/community';


type Props = {
    index: number;
}

const CommunityItem = (props: Props) => {

    const currentItem = community[props?.index];
    
    return (
        <div 
            key={currentItem?.id}
            className="
                group relative rounded-sm w-full min-w-[25rem] medium-sm:min-w-[28rem] h-full flex flex-col items-start 
                border border-black dark:border-white select-none cursor-pointer
                px-6 
                pt-9 
                pb-6 
                mr-10"
            >

                <div className="flex flex-col">
                    <div className="flex flex-col space-y-9 medium-sm:space-y-11">
                        <div className="border w-full h-full 
                            max-h-[5rem] max-w-[5rem] medium-sm:max-w-[6rem] medium-sm:max-h-[6rem]">
                            <img className="w-full h-full object-cover" src={currentItem.image} alt="community" />
                        </div>

                        <div className="flex flex-col font-work-sans space-y-1">
                            <div className="text-3xl medium-sm:text-4xl font-semibold "><p>{currentItem.communityTitle}</p></div>
                            <div className="text-lg font-medium"><p>Role: <span className="font-semibold">{currentItem.roleInCommunity}</span></p></div>
                        </div>
                    </div>

                    <div className="w-full border border-black my-6">

                    </div>

                    <div className="mb-2 medium-sm:mb-16">
                        <div className="font-work-sans text-sm">
                            <p>{currentItem.description}</p>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default CommunityItem