import { motion } from "framer-motion";
import React from "react";
import { myWork } from "../context/work";
import RightTailedArrow from "../icon/right-tailed-arrow";
import { linkClassName, linkIconContainer } from "../styles/global-style";
import SocialMediaLink from "./social-media-link";

type Props = {
	modIndex?: number;
	index: number;
};

const workItemVariant = {
	hidden: {
		x: "100%",
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
};

const WorkItem = (props: Props) => {
	const { modIndex, index } = props;

	const currentItem = myWork[index];

	return (
		<motion.div
			variants={workItemVariant}
			key={index}
			className="
                group overflow-hidden relative rounded-sm w-full min-w-[26rem] medium-sm:min-w-[28rem] large-xs:min-w-[30rem] h-full flex flex-col  
                border-2 border-green-200 select-none cursor-pointer transition-all ease-linear duration-500
                mr-5 p-5 space-y-4
                
                "
		>
			{currentItem?.image && (
				<div className="absolute w-full h-full top-0 left-0 -z-30 opacity-30 ">
					<img
						className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500 ease-in-out"
						src={`${currentItem?.image}`}
						alt=""
					/>
				</div>
			)}

			<div
				className="flex flex-row items-center justify-between text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400"
			>
				<div className="font-machina font-semibold text-2xl">
					<p>{currentItem?.header}</p>
				</div>

				<div className="font-machina text-sm">
					<p>NG</p>
				</div>
			</div>

			<div className="font-inter tracking-wider text-base pb-11 text-transparent text-black dark:text-white">
				<p>{currentItem?.description}</p>
			</div>

			<div className="flex flex-row items-center justify-between">
				<div
					className="font-machina text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400"
				>
					<p>20/20/2011</p>
				</div>

				<div>
					<SocialMediaLink
						text={"Website Link"}
						href={`${currentItem?.href}`}
						linkClassName={`font-machina ${linkClassName}`}
						icon={<RightTailedArrow className={`-rotate-45`} />}
						iconContainerClassName={`${linkIconContainer}`}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default WorkItem;
