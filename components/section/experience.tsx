import React from 'react'
import ExperienceList from '../experience-list';

type Props = {}

const Experience = (props: Props) => {
    return (
		<div className="px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20">
			<div>
				<ExperienceList />
			</div>
		</div>
	);
}

export default Experience