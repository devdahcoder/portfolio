/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
    logoText?: string;
    logoIcon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Logo = (props: Props) => {

    const { className, logoIcon, logoText, style } = props;

    const text = logoText ?? "Olamide";


    return (
        <Link href="/">
            <a className="flex flex-row items-center justify-center w-full">
                <div className={`flex flex-row item-center font-medium text-3xl medium-sm:text-4xl font-seibold capitalize ${className}`}>
                    <span>{logoIcon}</span>
                    <div className="flex flex-row items-center text-black dark:text-white transition-all delay-100 ease-linear">
                        <p>{text}</p> <span className="text-green-500 animate-pulse">.</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Logo