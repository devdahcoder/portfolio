import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const LeftBackgroundOval = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '1347';
    const svgHeight = height ?? '1117';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g filter="url(#filter0_f_606_230)">
                <path d="M234.834 352.315C457.313 265.144 952.072 237.631 1034.75 448.765C1117.43 659.899 756.714 1029.73 534.235 1116.9C311.756 1204.07 64.3782 1103.58 -18.2991 892.444C-100.976 681.31 12.3551 439.486 234.834 352.315Z" fill="#1ED291"/>
            </g>
            <defs>
                <filter id="filter0_f_606_230" x="-345.332" y="-12.8542" width="1692.16" height="1461.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_606_230"/>
                </filter>
            </defs>
        </svg>
    )
}
export default LeftBackgroundOval
