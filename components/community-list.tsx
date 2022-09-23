import React from 'react'
import { WindowSize } from '../hooks'
import Container from './container'
import SectionHeader from './section-header'
import SliderContainer from './slider-container'

type Props = {}

const CommunityList = (props: any) => {

    const { cursor, ...rest } = props;

    // const translateX = cursor.toFixed(13) * 488;

    const breakpoint = 768;

    const width = WindowSize();

    const translateX = cursor.toFixed(13) * (width >= breakpoint ? 488 : 440);

    return (
        <Container>
            
            <SectionHeader headerText={"Community"} sectionTitle={"Community"} />

            <SliderContainer rest={rest} translate={translateX} />
        </Container>
    )
}

export default CommunityList