import React from 'react'

type Props = {
    index: number;
}

const ContributionItem = (props: Props) => {
    return (
        <div 
            key={props?.index}
            className="
                group relative rounded-sm w-full min-w-[25rem] medium-sm:min-w-[40rem] h-full flex flex-col items-start 
                border-2 border-green-200 select-none cursor-pointer transition-all ease-linear duration-500
                pl-6 
                pr-8
                pt-9 
                pb-6 
                mr-5"
        >
            hello world
        </div>
    )
}

export default ContributionItem