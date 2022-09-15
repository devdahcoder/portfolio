import React from 'react'
import SectionHeader from '../section-header'
import TalkList from '../talk-list'

type Props = {}

const Talk = (props: Props) => {
    return (
        <div className="pt-20 pb-40">
            <div className="
                flex flex-col relative w-full space-y-12
                px-4 small-large:px-5 medium-sm:px-10 extra-large-xs:px-20 ">

                    <div className="flex flex-row">
                        <div className="w-full flex-grow">
                            <SectionHeader containerClassName={""} headerText={"Public Speaking"} sectionTitle={"Talks"} />
                        </div>


                        <div className="font-work-sans w-[80%]" dir="rtl">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra praesent nisi tempor pharetra vel. Est nisl id ornare condimentum diam nunc suspendisse.</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <TalkList />
                    </div>
            </div>
        </div>
    )
}

export default Talk