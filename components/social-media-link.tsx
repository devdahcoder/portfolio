import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

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
                    flex flex-row items-center w-full h-full
                    font-medium ${props.linkClassName}`
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

















// import React from 'react';
// import { BsArrowUpRight } from 'react-icons/bs';

// type Props = {
//     className?: string;
//     style?: React.CSSProperties;
//     linkClassName?: string;
//     linkStyle?: React.CSSProperties;
//     text?: string;
//     href?: string;
// }

// const SocialMediaLink = (props: Props) => {
//     return (
//         <div style={props?.style} className={`group ${props?.className}`}>
//             <a 
//                 style={props?.linkStyle} 
//                 className={`flex flex-row items-center w-full h-full px-5 py-2 font-medium ${props.linkClassName}`} 
//                 href={`http://${props.href}`}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//             >
//                 {props?.text} <span className="ml-1.5 group-hover:rotate-[45deg] transition-all delay-100
//                 ease-in-out duration-500"><BsArrowUpRight /></span>
//             </a>
//         </div>
//     )
// }

// export default SocialMediaLink