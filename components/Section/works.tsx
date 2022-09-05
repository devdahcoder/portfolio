import React, { RefObject, useRef } from 'react'
import WorkItem from '../work-item';
import TouchCarousel from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import WorkList from '../work-list';


type Props = {}

const Works = (props: Props) => {
    
    const sliderElementRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
    const Container = touchWithMouseHOC(WorkList);

    return (
        <div>
            <TouchCarousel
                ref={sliderElementRef}
                component={Container}
                cardSize={480}
                cardCount={9}
                loop={false}
                renderCard={WorkItem}
                onRest={(index: number) => console.log(`rest at index ${index}`)}
            />
        </div>
    )
}

export default Works