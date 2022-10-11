import React from 'react';

type Props = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const ContainerLayout = (props: Props) => {
    return (
        <div 
            style={props?.style} 
            className={`flex flex-col w-full relative ${props?.className}`}>
            {props?.children}
        </div>
    )
}

export default ContainerLayout