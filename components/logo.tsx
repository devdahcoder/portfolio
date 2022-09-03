import React from 'react'

type Props = {
    logoText?: string;
    logoIcon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Logo = (props: Props) => {

    const { className, logoIcon, logoText, style } = props;

    const text = logoText ?? "Ariouse"

    return (
        <div className={`flex flex-row item-center font-medium text-xl small-xs:text-2xl medium-xs:text-3xl medium-sm:text-4xl font-seibold capitalize ${className}`}>
            <span>{logoIcon}</span>
            <div className="flex flex-row items-center text-black dark:text-white transition-all delay-100 ease-linear">
                <p>{text}</p> <span className="text-green-500 animate-pulse">.</span>
            </div>
        </div>
    )
}

export default Logo