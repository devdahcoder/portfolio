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
                className={`
                    flex flex-row items-center w-full h-full border
                    text-xs medium-xs:text-sm
                    py-1 small-xs:py-2 small-mid:py-2.5
                    px-1 small-xs:px-3 
                    small-large:px-5 small-large:py-3 font-medium ${props.linkClassName}`
                } 
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