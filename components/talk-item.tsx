import React, { useState, useRef, RefObject } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { CloseOnEventListen } from '../hooks';
import { TalkList } from '../types';


type Props = {
    id: number;
    year: string;
    talkList: TalkList[];
}

const TalkItem = (props: Props) => {

    const { id, year, talkList } = props;

    const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
    const [currentAccordionIndex, setCurrentAccordionIndex] = useState<number>(0);
    const refElement = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

    CloseOnEventListen(refElement, setIsAccordionOpen);

    return (
        <div className="">
            <div 
                ref={refElement}
                onClick={() => setIsAccordionOpen(!isAccordionOpen)} 
                role={"button"} 
                className="group flex flex-row items-center justify-between border-b py-1 cursor-pointer"
                >
                <div className="text-6xl font-normal opacity-60">
                    <p>{year}</p>
                </div>

                <div className="flex items-center justify-center">
                    <button className=" flex items-center justify-center border min-w-fit w-7 h-7">
                        <IoIosArrowDown className="opacity-60" />
                    </button>
                </div>
            </div>

            <div className={`transition-all duration-500 ease-in-out ${isAccordionOpen ? 'h-60 ' : 'overflow-y-hidden h-0'} `}>
                <div className={`py-3 font-inter space-y-3 `}>
                    {
                        talkList.map(({ id, talkTitle, eventTitle, eventLink, eventDate }, index) => (
                            <div key={index} className="flex flex-col justify-start items-start text-sm">
                                <div><p>{eventTitle}</p></div>
                                <div className="flex flex-row items-center">
                                    <div className="flex flex-row items-center">
                                        <div>
                                            <p>{talkTitle}</p>
                                        </div>
                                        <div>
                                            <p>2018</p>
                                        </div>
                                    </div>
                                    <span className="mx-1">•</span>
                                    <div>
                                        <p>{eventDate}</p>
                                    </div>
                                    <span className="mx-1">•</span>
                                    <span><a className="underline" href={`http://${eventLink}`} target="_blank" rel="noopener noreferrer">See Presentation</a></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TalkItem