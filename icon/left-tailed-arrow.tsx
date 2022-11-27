import React from "react";

type Props = {
	className?: string;
	width?: string;
	height?: string;
};

const LeftTailedArrow = ({ className, width, height }: Props) => {
	const svgStyle = className ?? "";
	const svgWidth = width ?? "24";
	const svgHeight = height ?? "24";

	return (
		<svg
			className={svgStyle}
			width={svgWidth}
			height={svgHeight}
			viewBox={`0 0 ${svgWidth} ${svgHeight}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
				stroke="black"
				strokeWidth={1.5}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.4999 12H3.66992"
				stroke="black"
				strokeWidth={1.5}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default LeftTailedArrow;
