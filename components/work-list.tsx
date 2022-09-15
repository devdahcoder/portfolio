import React, { RefObject, useRef, useId } from 'react';
import SectionHeader from './section-header';


const WorkList = (props: any) => {

    const { cursor, ...rest } = props;

    const translateX = cursor.toFixed(13) * 500;

    return (
        <div className="
                flex flex-col relative w-full space-y-12
                pl-4 small-large:pl-5 medium-sm:pl-10 extra-large-xs:pl-20"
        >

            
            <SectionHeader headerText={"Selected Projects"} sectionTitle={"Works"} />



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