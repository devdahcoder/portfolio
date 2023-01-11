import React from 'react'

type Props = {
	id?: number;
	companyName?: string;
	year?: string;
	className?: string;
	containerClassName?: string;
};

const ExperienceItem = (props: Props) => {
    const { className, companyName, containerClassName, id, year } = props;
    return (
		<div>
			<li className="experience--li list-none">
				<div className="experience--li--container">
                    {/* <p className="">{companyName}</p> */}
                    <a href="" className="flex flex-row items-center">{companyName}</a>
				</div>
			</li>
		</div>
	);
}

export default ExperienceItem