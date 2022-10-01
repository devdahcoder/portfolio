import React, { RefObject, useRef } from 'react'
import Slider from '../slider';
import { community } from '../../context/community';
import CommunityList from '../community-list';
import CommunityItem from '../community-item';


type Props = {}

const Community = (props: Props) => {
    const sliderElementRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

    return (
        <section className="py-20">
            <Slider
                sliderElementRef={sliderElementRef}
                contentLength={community?.length}
                renderCard={(index: number) => <CommunityItem index={index} />}
                renderContainer={CommunityList}
                loop={false}
                onReset={() => {}}
                cardSize={488}
            />
        </section>
    )
}

export default Community