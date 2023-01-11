import React from "react";
import ExperienceItem from "./experience-item";
import { experience } from "../context/experience";
import { Experience } from "../types";

type Props = {};

const ExperienceList = (props: Props) => {
	return (
		<div>
			<ul className="list-none flex flex-col">
				{experience.map((props: Experience, index: number) => {
                    const { className, companyName, containerClassName, id, year} = props;
					return <ExperienceItem key={index} id={id} companyName={companyName} year={year} className={className} containerClassName={containerClassName} />;
				})}
			</ul>
		</div>
	);
};

export default ExperienceList;
