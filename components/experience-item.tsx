import { MotionValue, useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'

type Props = {
	id?: number;
	companyName?: string;
	year?: string;
	className?: string;
	containerClassName?: string;
};

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 0.9], [-distance, distance]);
}

const ExperienceItem = (props: Props) => {
	const { className, companyName, containerClassName, id, year } = props;
	const ref = useRef<HTMLDivElement>(
		null
	) as React.MutableRefObject<HTMLDivElement>;

	const { scrollYProgress } = useScroll({ target: ref });

	const y = useParallax(scrollYProgress, 50);

    return (
		<div>
			<li className="experience--li list-none">
				<motion.div
					ref={ref}
					style={{ y }}
					className="experience--li--container"
				>
					<a href="" className="flex flex-row items-center">
						{companyName}
					</a>
				</motion.div>
			</li>
		</div>
	);
}

export default ExperienceItem