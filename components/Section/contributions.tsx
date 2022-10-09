import React, { RefObject, useRef } from 'react';
import { contributions } from '../../context/contibutions';
import ContributionItem from '../contribution-item';
import ContributionList from '../contribution-list';
import Slider from '../slider';


type Props = {}

const Contributions = (props: Props) => {

    const sliderElementRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

    return (
        <section id="contribution" className="py-20">
            <Slider
                sliderElementRef={sliderElementRef}
                contentLength={contributions?.length}
                renderCard={(index: number) => <ContributionItem index={index} />}
                renderContainer={ContributionList}
                loop={false}
                onReset={() => {}}
                cardSize={500}
            />
        </section>
    )
}

export default Contributions