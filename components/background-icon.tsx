import React from 'react';

type Props = {
    backgroundSvgIcon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const BackgroundIcon = (props: Props) => {

    const { backgroundSvgIcon, className, style } = props;
    
    return (
        <div style={style} className={`${className}`}>
            {backgroundSvgIcon}
        </div>
    )
};

export default BackgroundIcon