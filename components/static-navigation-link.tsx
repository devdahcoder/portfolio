import Link from 'next/link';
import React from 'react';
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
                className={`
                    relative flex flex-row items-center justify-center outline-0 outline-none w-full h-full 
                    py-1 small-xs:py-2 medium-xs:py-2.5
                    px-2 small-xs:px-3 medium-xs:px-5
                    text-sm font-medium transition-all delay-100 ease-linear text-black dark:text-white hover:tracking-widest ${className}`} 
                style={style}
            >
                {name}
            </button>
        </div>
    )
}

export default StaticNavigationLink