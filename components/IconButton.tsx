import React from 'react'

type Props = {
    icon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
}

const IconButton = (props: Props) => {

    const { className, containerClassName, containerStyle, icon, style } = props;
    
    return (
        <div style={containerStyle} className={`${containerClassName}`}>
            <button style={style} className={`${className}`}>
                {icon}
            </button>
        </div>
    )
}

export default IconButton