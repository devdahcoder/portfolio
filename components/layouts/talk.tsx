import React from 'react'
import ContainerLayout from '../container-layout'
import SectionHeader from '../section-header'
import TalkList from '../talk-list'

type Props = {}

const Talk = (props: Props) => {
    return (
        <section className="border border-black py-20">
            <ContainerLayout className="border">

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
            </ContainerLayout>
        </section>
    )
}

export default Talk