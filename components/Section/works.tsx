import { motion } from "framer-motion";
import React, { RefObject, useRef } from "react";
import { myWork } from "../../context/work";
import Slider from "../slider";
import WorkItem from "../work-item";
import WorkList from "../work-list";

type Props = {};

const workVariant = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			when: "beforeChildren",
			delayChildren: 0.4,
			staggerChildren: 0.3,
		},
	},
};

const Works = (props: Props) => {
	const sliderElementRef = useRef<HTMLDivElement>(
		null
	) as RefObject<HTMLDivElement>;

	return (
		<motion.section
			variants={workVariant}
			initial="hidden"
			whileInView="visible"
			id="work"
			className="py-36"
		>
			<Slider
				sliderElementRef={sliderElementRef}
				contentLength={myWork?.length}
				renderCard={(index: number) => <WorkItem index={index} />}
				renderContainer={WorkList}
				loop={false}
				onReset={() => {}}
				cardSize={500}
			/>
		</motion.section>
	);
};

export default Works;
