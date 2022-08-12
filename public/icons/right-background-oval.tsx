import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const RightBackgroundOval = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '1214';
    const svgHeight = height ?? '1117';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g filter="url(#filter0_f_606_231)">
                <path d="M903.876 147.182C1064.86 275.412 1294.72 637.662 1166.95 798.171C1039.17 958.68 602.138 856.666 441.155 728.435C280.171 600.205 253.252 366.136 381.029 205.627C508.806 45.1182 742.893 18.9513 903.876 147.182Z" fill="#00754B"/>
            </g>
            <defs>
                <filter id="filter0_f_606_231" x="0.355225" y="-234.19" width="1503.76" height="1414.69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_606_231"/>
                </filter>
            </defs>
        </svg>
    )
}
export default RightBackgroundOval



