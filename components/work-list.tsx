import React, { RefObject, useRef, useId } from 'react';

const WorkList = (props: any) => {

    const { cursor, ...rest } = props;

    const translateX = cursor.toFixed(13) * 500;

    return (
        <div className="
                flex flex-col relative w-full space-y-12
                pl-4 small-large:pl-5 medium-sm:pl-10 extra-large-xs:pl-20"
        >

            <div className="border">
                <div className="text-8xl text-dark-bg dark:text-white font-medium leading-9 opacity-20">
                    <h1>Works</h1>
                </div>
                <div className="border text-2xl text-black dark:text-white font-work-sans">
                    <p>Selected Projects</p>
                </div>
            </div>



            <div className="flex flex-row border overflow-x-hidden touch-pan-y"
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