import React from 'react';
import { motion } from 'framer-motion';

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
            <motion.div className={`flex flex-row w-full ${className}`}
                style={{ 
                    transform: `translate3d(${translate}px, 0, 0)`,
                    ...style
                }}
                {...rest}
            >

            </motion.div>

        </div>
    )
}

export default SliderContainer