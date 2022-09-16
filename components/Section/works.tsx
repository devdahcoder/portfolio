import React, { RefObject, useRef } from 'react'
import WorkItem from '../work-item';
import WorkList from '../work-list';
import { myWork } from '../../context/work';
import Slider from '../slider';

type Props = {}

const Works = (props: Props) => {
    
    const sliderElementRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

    return (
        <div className="border">

            <Slider
                sliderElementRef={sliderElementRef}
                contentLength={myWork?.length}
                renderCard={(index: number) => <WorkItem index={index} />}
                renderContainer={WorkList}
                loop={false}
                onReset={() => {}}
                cardSize={500}
            />
        </div>
    )
}

export default Works