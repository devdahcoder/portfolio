import React from 'react'
import { WindowSize } from '../hooks'
import Container from './container'
import SectionHeader from './section-header'
import SliderContainer from './slider-container'

const ContributionList = (props: any) => {

    const { cursor, ...rest } = props;

    const breakpoint = 768;

    const width = WindowSize();

    const translateX = cursor.toFixed(13) * (width >= breakpoint ? 500 : 420);

    return (
        <Container>
            
            <SectionHeader headerText={"Selected Contributions"} sectionTitle={"Contributions"} />

            <SliderContainer rest={rest} translate={translateX} />
            
        </Container>
    )
}

export default ContributionList