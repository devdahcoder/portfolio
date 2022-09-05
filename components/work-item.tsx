import React from 'react'

type Props = {}

const WorkItem = (props: Props) => {
    return (
        <div className="w-full min-w-[30rem] h-full flex flex-col items-start border-2 border-green-200 
            px-8 py-4 pb-6 space-y-8 select-none cursor-pointer">
            <div className="text-5xl font-medium text-green-200">
                <p>Kwares App</p>
            </div>
            <div className="font-inter text-sm tracking-wider">
                <p>
                    An emergency app which give users the ability to - on the spot- report emergency cases near them as happening at exact time of reporting.
                </p>
            </div>

            <div>
                <a
                    className="flex flex-row items-center w-full"
                    href="http://" target="_blank" rel="noopener noreferrer">
                        Link
                </a>
            </div>
        </div>
    )
}

export default WorkItem