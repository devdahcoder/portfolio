import React from 'react'

type Props = {
    logoText?: string;
    logoIcon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Logo = (props: Props) => {

    const { className, logoIcon, logoText, style } = props;

    const text = logoText ?? "Olamide"

    return (
        <div className={`flex flex-row item-center font-medium text-4xl font-seibold capitalize ${className}`}>
            <span>{logoIcon}</span>
            <div className="flex flex-row items-center">
                <p>{text}</p> <span className="text-green-500 animate-pulse">.</span>
            </div>
        </div>
    )
}

export default Logo