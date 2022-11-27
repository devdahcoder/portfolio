import React from "react";

type Props = {
	className?: string;
	width?: string;
	height?: string;
};

const RightTailedArrow = ({ className, width, height }: Props) => {
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
				d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699"
				stroke="black"
				strokeWidth={1.5}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.5 12H20.33"
				stroke="black"
				strokeWidth={1.5}
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default RightTailedArrow;
