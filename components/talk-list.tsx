import React, { useState } from 'react'
import TalkItem from './talk-item'

type Props = {}

const TalkList = (props: Props) => {

    return (
        <div className="space-y-5">
            {
                [1, 2, 3, 4, 5].map((index) => {
                    return (<TalkItem key={index} />)
                })
            }
        </div>
    )
}

export default TalkList