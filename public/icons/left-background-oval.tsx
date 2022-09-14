import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const LeftBackgroundOval = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '1367';
    const svgHeight = height ?? '1150';

    return (
        <svg
            className={svgStyle}
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_104_588)">
            <path
                d="M254.835 365.315C477.314 278.144 972.072 250.631 1054.75 461.765C1137.43 672.899 776.715 1042.73 554.236 1129.9C331.757 1217.07 84.3792 1116.58 1.70186 905.444C-80.9754 694.31 32.3561 452.486 254.835 365.315Z"
                fill="#1ED291"
            />
            </g>
            <defs>
            <filter
                id="filter0_f_104_588"
                x={-325.332}
                y={0.145752}
                width={1692.16}
                height={1461.16}
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
                result="effect1_foregroundBlur_104_588"
                />
            </filter>
            </defs>
        </svg>
    )
}
export default LeftBackgroundOval

