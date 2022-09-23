import React from 'react'
import ContainerLayout from '../container-layout'
import SectionHeader from '../section-header'
import TalkList from '../talk-list'

type Props = {}

const Talk = (props: Props) => {
    return (
        <section className="border border-black py-20">
            <ContainerLayout className="px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20">

                    <div className="flex flex-col medium-xs:flex-row">
                        <div className="w-full flex-grow">
                            <SectionHeader containerClassName={""} headerText={"Public Speaking"} sectionTitle={"Talks"} />
                        </div>


                        <div className="border font-work-sans mr-auto w-[80%] small-xs:w-full text-sm" dir="rtl">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra praesent nisi tempor pharetra vel. Est nisl id ornare condimentum diam nunc suspendisse.</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <TalkList />
                    </div>
            </ContainerLayout>
        </section>
    )
}

export default Talk