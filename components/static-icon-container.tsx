import React from 'react'

type Props = {
    className?: string;
    icon?: React.ReactNode;
}

const StaticIconContainer = (props: Props) => {

    const { className, icon } = props;
    
    return (
        <div className={`absolute h-[1px] w-9/12 bg-black dark:bg-white rounded-full transition-all duration-300 ease-linear ${className}`}>

        </div>
    )
}

export default StaticIconContainer