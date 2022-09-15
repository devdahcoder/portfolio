import React, { useState } from 'react';
import { CgArrowLongDown } from 'react-icons/cg';

type Props = {}

const TalkItem = (props: Props) => {

    const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
    const [currentAccordionIndex, setCurrentAccordionIndex] = useState<number>(0);

    return (
        <div className="border">
            <div onClick={() => setIsAccordionOpen(!isAccordionOpen)} role={"button"} className="group flex flex-row items-center justify-between border-b py-1 cursor-pointer">
                <div className="text-6xl font-normal ">
                    <p>2022</p>
                </div>

                <div className="flex items-center justify-center">
                    <button className="group-hover:animate-bounce flex items-center justify-center border min-w-fit w-7 h-7">
                        <CgArrowLongDown className="" />
                    </button>
                </div>
            </div>

            <div className={`border overflow-y-auto h-0 transition-all duration-500 ease-in-out ${isAccordionOpen && 'h-60'} `}>
                hello world
            </div>
        </div>
    )
}

export default TalkItem