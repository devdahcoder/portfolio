import React, { RefObject, useRef } from 'react'
import WorkItem from '../work-item';
import TouchCarousel from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import WorkList from '../work-list';
import { myWork } from '../../context/work';

type Props = {}

const Works = (props: Props) => {
    
    const sliderElementRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
    const Container = touchWithMouseHOC(WorkList);

    return (
        <div className="border">
            <TouchCarousel
                ref={sliderElementRef}
                component={Container}
                cardSize={500}
                cardCount={myWork.length}
                loop={false}
                renderCard={(index: number) => <WorkItem index={index} />}
                onRest={(index: number) => console.log(`rest at index ${index}`)}
            />
        </div>
    )
}

export default Works