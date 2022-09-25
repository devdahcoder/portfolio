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
        <div className={`flex flex-col ${containerClassName}`}>
            <div className={`text-6xl small-large:text-7xl medium-sm:text-8xl text-dark-bg dark:text-white 
                font-medium leading-6 small-large:leading-8 medium-sm:leading-9 opacity-20 transition-all delay-100 ease-linear duration-500 ${sectionClassName}`}>
                <h1>{sectionTitle}</h1>
            </div>

            <div className={`small-large:text-xl medium-sm:text-2xl text-black dark:text-white font-work-sans ${headerClassName}`}>
                <p>{headerText}</p>
            </div>
        </div>
    )
}

export default SectionHeader