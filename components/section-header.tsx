import React from 'react'

type Props = {
    headerText?: string;
    sectionTitle?: string;
    containerClassName?: string;
    headerClassName?: string;
    sectionClassName?: string;
}

const SectionHeader = (props: Props) => {

    const { containerClassName, headerClassName, headerText, sectionClassName, sectionTitle } = props;

    return (
        <div className={`border flex flex-col ${containerClassName}`}>
            <div className={`text-8xl text-dark-bg dark:text-white font-medium leading-9 opacity-20 ${sectionClassName}`}>
                <h1>{sectionTitle}</h1>
            </div>
            <div className={`border text-2xl text-black dark:text-white font-work-sans ${headerClassName}`}>
                <p>{headerText}</p>
            </div>
        </div>
    )
}

export default SectionHeader