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
// text-8xl
    return (
        <div className={`flex flex-col ${containerClassName}`}>
            <div className={`text-6xl small-large:text-7xl medium-sm:text-8xl text-dark-bg dark:text-white 
                font-medium leading-6 small-large:leading-8 medium-sm:leading-9 opacity-20 transition-all ease-linear duration-500 ${sectionClassName}`}>
                <h1>{sectionTitle}</h1>
            </div>
            {/* leading-9 */}
            <div className={`small-large:text-xl medium-sm:text-2xl text-black dark:text-white font-work-sans transition-all ease-linear duration-500 ${headerClassName}`}>
                <p>{headerText}</p>
            </div>
        </div>
    )
}
// text-2xl
export default SectionHeader