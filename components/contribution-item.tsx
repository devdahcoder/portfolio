/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { contributions } from '../context/contibutions';


type Props = {
    index: number;
}

const ContributionItem = (props: Props) => {

    const currentItem = contributions[props?.index];
    
    return (
        <div 
            key={props?.index}
            className="
                group relative rounded-sm overflow-hidden w-full min-w-[25rem] medium-sm:min-w-[33rem] large-xs:min-w-[40rem] h-full flex flex-col items-start 
                select-none cursor-pointer transition-all ease-linear duration-500
                mr-5"
        >

            <div className="flex flex-col items-start justify-end absolute 
                bg-white opacity-60 
                left-0 top-0 w-0 h-full transition-all duration-500 ease-linear group-hover:w-full">
                <div className="fixed left-0 bottom-0 m-10 text-2xl medium-sm:text-3xl large-xs:text-4xl font-medium w-full 
                    transition-all ease-linear delay-75
                    invisible group-hover:visible group-hover:transition-all 
                    group-hover:ease-linear group-hover:duration-500 group-hover:delay-200">
                    <p>{ currentItem?.contributionTitle ?? "Memoji Placeholder" }</p>
                </div>
            </div>


            <img className="w-full h-full object-cover" src={currentItem?.picture} alt="" />
        </div>
    )
}

export default ContributionItem