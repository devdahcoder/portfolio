import React from 'react';

type Props = {
    className?: string;
    style?: React.CSSProperties;
    linkClassName?: string;
    linkStyle?: React.CSSProperties;
    text?: string;
    href?: string;
    icon: React.ReactNode;
    iconContainerClassName?: string;
}

const SocialMediaLink = (props: Props) => {
    return (
        <div style={props?.style} className={`group ${props?.className}`}>
            <a 
                style={props?.linkStyle} 
                className={`
                    flex flex-row items-center w-full h-full ${props.linkClassName}`
                } 
                href={`${props.href}`}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {props?.text} <span className={`${props?.iconContainerClassName}`}>
                    {props?.icon}
                </span>
            </a>
        </div>
    )
}

export default SocialMediaLink
