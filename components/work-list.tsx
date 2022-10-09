import React, { RefObject, useRef, useId } from 'react';
import { calculateWidth, WindowSize } from '../hooks';
import Container from './container';
import SectionHeader from './section-header';
import SliderContainer from './slider-container';

const WorkList = (props: any) => {

    const { cursor, ...rest } = props;

    const breakpoint = 768;

    const width = WindowSize();


    const translateX = cursor.toFixed(13) * calculateWidth(width, 500, 468, 436);

    return (
        <Container>
            
            <SectionHeader headerText={"Selected Projects"} sectionTitle={"Works"} />

            <SliderContainer rest={rest} translate={translateX} />
            
        </Container>
    )
}

export default WorkList