import React, { RefObject } from 'react';
import TouchCarousel from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";

type Props = {
    sliderElementRef: RefObject<HTMLDivElement>;
    contentLength: number | string;
    renderCard: (index: number) => JSX.Element;
    renderContainer: (props: any) => JSX.Element;
    cardSize: number;
    loop: boolean;
    onReset: () => void;
}

const Slider = (props: Props) => {

    const container = touchWithMouseHOC(props?.renderContainer);

    return (
        <TouchCarousel
            ref={props?.sliderElementRef}
            component={container}
            cardSize={props?.cardSize}
            cardCount={props?.contentLength}
            loop={props?.loop}
            renderCard={props?.renderCard}
            onRest={props?.onReset}
        />
    )
}

export default Slider