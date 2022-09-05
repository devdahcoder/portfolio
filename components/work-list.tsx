import React, { RefObject, useRef } from 'react';

type Props = {}

const WorkList = (props) => {

    const { cursor, ...rest } = props;

    const translateX = cursor.toFixed(5) * 480;

    return (
        <div className="
                flex flex-row relative w-full pl-4 small-large:pl-5 medium-sm:pl-10 extra-large-xs:pl-20"
        >
            <div className="flex flex-row border w-full overflow-x-hidden touch-pan-y"
            >
                <div className="flex flex-row w-full"
                    style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                    {...rest}
                >

                </div>

            </div>
        </div>
    )
}

export default WorkList