import React from 'react'

type Props = {
    showHeader?: boolean;
    headerText?: string;
    className?: string;
    style?: React.CSSProperties;
    headerClassName?: string;
    headerStyles?: React.CSSProperties;
}

const SectionContainer = (props: Props) => {

    const { className, headerClassName, headerStyles, headerText, showHeader, style } = props;

    return (
        <div style={style} className={`${className}`}>
            <div style={headerStyles} className={`${headerClassName}`}>
                <p>{headerText}</p>
            </div>
        </div>
    )
}

export default SectionContainer