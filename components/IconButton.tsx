import React from 'react'

type Props = {
    icon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    handleClick?: () => void;
}

const IconButton = (props: Props) => {

    const { className, containerClassName, containerStyle, icon, style, handleClick } = props;
    
    return (
        <div style={containerStyle} className={`${containerClassName}`}>
            <button onClick={handleClick} style={style} className={`flex flex-row items-center justify-center border-0 outline-0 w-full h-full ${className}`}>
                {icon}
            </button>
        </div>
    )
}

export default IconButton