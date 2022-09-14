import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const RightBackgroundOval = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '1505';
    const svgHeight = height ?? '1157';

    return (
        <svg
            className={svgStyle}
            width={svgWidth}
            height={height}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_104_590)">
            <path
                d="M903.876 167.182C1064.86 295.412 1294.72 657.662 1166.95 818.171C1039.17 978.68 602.138 876.666 441.155 748.435C280.171 620.205 253.252 386.136 381.029 225.627C508.806 65.1182 742.893 38.9513 903.876 167.182Z"
                fill="#00754B"
            />
            </g>
            <defs>
            <filter
                id="filter0_f_104_590"
                x={0.355469}
                y={-214.189}
                width={1503.76}
                height={1414.69}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                />
                <feGaussianBlur
                stdDeviation={150}
                result="effect1_foregroundBlur_104_590"
                />
            </filter>
            </defs>
        </svg>
    )
}
export default RightBackgroundOval



