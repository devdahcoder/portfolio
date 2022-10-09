import React from 'react'
import { calculateWidth, WindowSize } from '../hooks'
import Container from './container'
import SectionHeader from './section-header'
import SliderContainer from './slider-container'

const ContributionList = (props: any) => {

    const { cursor, ...rest } = props;

    const breakpoint = 768;

    const width = WindowSize();

    const translateX = cursor.toFixed(13) * calculateWidth(width, 660, 548, 420);

    return (
        <Container>
            
            <SectionHeader headerText={"Selected Contributions"} sectionTitle={"Contributions"} />

            <SliderContainer rest={rest} translate={translateX} />
            
        </Container>
    )
}

export default ContributionList