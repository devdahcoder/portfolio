import React from 'react';
import { useMainContainer } from '../state/main';
import Logo from './logo';
import ThemeToggleButton from './theme-toggle-button';
import { motion } from 'framer-motion';

const Header = () => {

    const { navigationModal, toggleNavigationModal, isSiteLoading } = useMainContainer();
    
    return (
        <div className={`flex border-b border-b-black dark:border-white transition-all duration-500 ease-linear w-full`}>
            <div 
                className="
                    flex flex-row items-center justify-between grow 
                    px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20 
                    py-7"
                >
                <div className={`${ isSiteLoading ? "" : "z-50" } flex flex-row items-center`}>
                    <Logo />
                </div>
                {/* <div className="">
                    <nav>
                        <ul className={`flex flex-row items-center list-none font-work-sans large-sm:space-x-5`}>
                            {headerNavigation?.map(({name, href, id, type, className, style, subNavigation}, index) => (
                                <li key={index}>
                                    {type === NAVIGATION_TYPE.LINK && (
                                        <LinkNavigation 
                                            name={name} 
                                            href={href} 
                                            id={id} 
                                            index={index} 
                                            type={type}
                                            className={className}
                                            style={style}
                                            // icon={icon}
                                        />
                                    )}

                                    {type === NAVIGATION_TYPE.STATIC && (
                                        <StaticNavigationLink
                                            name={name} 
                                            id={id} 
                                            index={index} 
                                            type={type}
                                            className={className}
                                            style={style}
                                            handleClick={() => {}}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div> */}
                <div className={`flex rounded-full ${ isSiteLoading ? "" : "z-50" }`}>
                    <motion.button 
                        whileTap={{ scale: 0.97 }}
                        onClick={toggleNavigationModal}
                        className="flex flex-col items-center justify-center font-inter relative h-10 w-10 rounded-full outline-none border-none">
                        <span className={`absolute h-[1px] w-9/12 bg-black dark:bg-white rounded-full transition-all duration-300 ease-linear ${navigationModal ? " translate-y-0 -rotate-45" : "-translate-y-[10px]"}`}></span>
                        <span className={`absolute h-[1px] w-9/12 bg-black dark:bg-white rounded-full transition-all duration-300 ease-linear ${navigationModal ? "opacity-0" : "opacity-1"}`}></span>
                        <span className={`absolute h-[1px] w-9/12 bg-black dark:bg-white rounded-full transition-all duration-300 ease-linear ${navigationModal ? " translate-y-0 rotate-45" : "translate-y-[10px]"}`}></span>
                    </motion.button>
                </div>
            </div>

            <div 
                className="
                    flex flex-row items-center justify-center border-l ml-auto relative
                    w-full max-w-[3.7rem] small-mid:max-w-[5rem] extra-large-xs:max-w-[5.4rem]
                    py-7
                    border-l-black dark:border-l-white"
                >
                <ThemeToggleButton />
            </div>
        </div>
    )
}

export default Header
