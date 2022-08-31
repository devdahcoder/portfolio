import Link from 'next/link';
import React from 'react'
import { NAVIGATION_TYPE } from '../types/enums';

type Props = {
    id?: number;
    index?: number;
    name: string;
    href: string;
    icon?: string;
    className?: string;
    style?: React.CSSProperties;
    type: NAVIGATION_TYPE;
}

const LinkNavigation = (props: Props) => {

    const { id, index, name, href, icon, className, style, type } = props;

    return (
        <div className="hidden large-sm:flex flex-row items-center" draggable="false" >
            <Link href={href}>
                <a 
                    className={`relative flex flex-row items-center justify-center w-full h-full py-2 px-3
                        text-sm font-medium transition-all delay-100 ease-linear text-black dark:text-white ${className}`} 
                    style={style}
                >
                    {name}
                </a>
            </Link>
        </div>
    )
}

export default LinkNavigation