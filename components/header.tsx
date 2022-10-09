import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { headerNavigation } from '../context/header-navigation';
import { useMainContainer } from '../state/main';
import { useThemeContainer } from '../state/theme';
import { NAVIGATION_TYPE } from '../types/enums';
import IconButton from './IconButton';
import LinkNavigation from './link-navigation';
import Logo from './logo';
import StaticNavigationLink from './static-navigation-link';
import ThemeToggleButton from './theme-toggle-button';
import { motion } from 'framer-motion';


type Props = {}

const Header = (props: Props) => {

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
                
                {/* <div 
                    className={`absolute small-mid:left-4 small-mid:top-6 large-sm:top-6 extra-large-xs:left-5 z-50 
                    ${navigationModal ? "flex transition-all delay-[3000ms] ease-linear" : "hidden"}`}
                >
                    <Logo logoText={"Ola"} />
                </div> */}

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

// py-3.5 large-sm:
// py-3.5 large-sm:
// w-full small-mid:max-w-[5rem] extra-large-xs:max-w-[5.4rem]
// px-3 small-mid:px-4 extra-large-xs:px-6 

export default Header
















































// import React, { useState } from 'react';
// import { headerNavigation } from '../context/header-navigation';
// import { NAVIGATION_TYPE } from '../types/enums';
// import IconButton from './IconButton';
// import LinkNavigation from './link-navigation';
// import Logo from './logo';
// import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useThemeContainer } from '../state/theme'
// import ThemeToggleButton from './theme-toggle-button';


// type Props = {}

// const Header = (props: Props) => {

//     return (
//         <div className={`flex border-b border-black dark:border-white`}>
//             <div className="flex flex-row items-center justify-between px-20 py-7 grow">
//                 <div className="flex flex-row items-center">
//                     <Logo />
//                 </div>

//                 <div>
//                     <nav>
//                         <ul className={`flex flex-row items-center list-none space-x-5 font-work-sans`}>
//                             {headerNavigation?.map(({name, href, id, type, className, style}, index) => (
//                                 <li key={index}>
//                                     {type === NAVIGATION_TYPE.LINK && (
//                                         <LinkNavigation 
//                                             name={name} 
//                                             href={href} 
//                                             id={id} 
//                                             index={index} 
//                                             type={type}
//                                             className={className}
//                                             style={style}
//                                             // icon={icon}
//                                         />
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             <div className="flex flex-row items-center justify-center px-6 py-7 border-l border-l-black dark:border-l-white ml-auto">
//                 <ThemeToggleButton />
//             </div>
//         </div>
//     )
// }

// export default Header