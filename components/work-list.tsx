import React, { RefObject, useRef, useId } from 'react';
import Container from './container';
import SectionHeader from './section-header';
import SliderContainer from './slider-container';


const WorkList = (props: any) => {

    const { cursor, ...rest } = props;

    const translateX = cursor.toFixed(13) * 500;

    return (
        <Container>
            
            <SectionHeader headerText={"Selected Projects"} sectionTitle={"Works"} />

            <SliderContainer rest={rest} translate={translateX} />
        </Container>
    )
}

export default WorkList