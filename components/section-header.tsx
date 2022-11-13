import React from 'react';

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

            <div className={`text-5xl small-xs:text-6xl small-large:text-7xl large-xs:text-8xl text-dark-bg dark:text-white 
                font-medium leading-5 small-xs:leading-6 small-large:leading-7 large-xs:leading-10 opacity-20 transition-all 
                delay-100 ease-linear duration-500 ${sectionClassName}`}>
                <h1>{sectionTitle}</h1>
            </div>

            <div className={`text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400small-large:text-xl small-large:text-1xl large-xs:text-2xl font-inter ${headerClassName}`}>
                <p>{headerText}</p>
            </div>

        </div>
    )
}

export default SectionHeader