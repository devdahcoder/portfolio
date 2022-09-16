import React from 'react'
import Container from './container'
import SectionHeader from './section-header'
import SliderContainer from './slider-container'

type Props = {}

const CommunityList = (props: any) => {

    const { cursor, ...rest } = props;

    const translateX = cursor.toFixed(13) * 488;

    return (
        <Container>
            
            <SectionHeader headerText={"Community"} sectionTitle={"Community"} />

            <SliderContainer rest={rest} translate={translateX} />
        </Container>
    )
}

export default CommunityList