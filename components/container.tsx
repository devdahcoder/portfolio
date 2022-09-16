import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    className?: string;
}

const Container = (props: Props) => {
    return (
        <div className={`
                flex flex-col relative w-full space-y-12
                pl-4 small-large:pl-5 medium-sm:pl-10 extra-large-xs:pl-20 ${props?.className}`}
        >
            {props?.children}
        </div>
    )
}

export default Container