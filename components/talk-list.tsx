import React, { useState } from 'react';
import { talks } from '../context/talks';
import TalkItem from './talk-item';


type Props = {}

const TalkList = (props: Props) => {

    return (
        <div className="space-y-5">
            {
                talks.map(({ id, year, talkList }, index) => {
                    return (<TalkItem key={index} id={id} year={year} talkList={talkList} />)
                })
            }
        </div>
    )
}

export default TalkList