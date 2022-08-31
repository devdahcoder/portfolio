import Link from 'next/link';
import React from 'react'
import { NAVIGATION_TYPE } from '../types/enums';

type Props = {
    id?: number;
    index?: number;
    name: string;
    icon?: string;
    className?: string;
    style?: React.CSSProperties;
    type: NAVIGATION_TYPE;
    handleClick: () => void;
};


const StaticNavigationLink = (props: Props) => {

    const { id, index, name, icon, className, style, type, handleClick } = props;

    return (
        <div className="flex large-sm:hidden flex-row items-center" draggable="false" >
            <button
                onClick={handleClick}
                className={`relative flex flex-row items-center justify-center outline-0 outline-none w-full h-full py-1 px-2
                small-sm:py-2 small-sm:px-3
                    text-sm font-medium transition-all delay-100 ease-linear text-black dark:text-white ${className}`} 
                style={style}
            >
                {name}
            </button>
        </div>
    )
}

export default StaticNavigationLink