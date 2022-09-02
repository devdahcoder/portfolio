import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

type Props = {
    className?: string;
    style?: React.CSSProperties;
    linkClassName?: string;
    linkStyle?: React.CSSProperties;
    text?: string;
    href?: string;
}

const SocialMediaLink = (props: Props) => {
    return (
        <div style={props?.style} className={`group ${props?.className}`}>
            <a 
                style={props?.linkStyle} 
                className={`flex flex-row items-center text-xs w-full h-full border px-1 py-1 small-xs:px-3 small-xs:py-2 
                    small-sm:px-5 small-sm:py-3 font-medium ${props.linkClassName}`} 
                href={`http://${props.href}`}
                target="_blank" 
                rel="noopener noreferrer"
            >
                {props?.text} <span className="ml-1 group-hover:rotate-[45deg] transition-all delay-100
                ease-in-out duration-500"><BsArrowUpRight /></span>
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