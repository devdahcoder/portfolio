import React from 'react'
import { CursorPos } from 'readline';

type Props = {
    rest: any;
    translate: number;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    className?: string;
    style?: React.CSSProperties;
}

const SliderContainer = (props: Props) => {

    const { rest, translate, containerStyle, style, className, containerClassName } = props;

    return (
        <div style={containerStyle} className={`flex flex-row overflow-x-hidden touch-pan-y ${containerClassName}`}
            >
            <div className={`flex flex-row w-full ${className}`}
                style={{ 
                    transform: `translate3d(${translate}px, 0, 0)`,
                    ...style
                }}
                {...rest}
            >

            </div>

        </div>
    )
}

export default SliderContainer