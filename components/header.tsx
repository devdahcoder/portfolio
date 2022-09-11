import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { headerNavigation } from '../context/header-navigation';
import { useThemeContainer } from '../state/theme';
import { NAVIGATION_TYPE } from '../types/enums';
import IconButton from './IconButton';
import LinkNavigation from './link-navigation';
import Logo from './logo';
import StaticNavigationLink from './static-navigation-link';
import ThemeToggleButton from './theme-toggle-button';



type Props = {}

const Header = (props: Props) => {

    return (
        <div className={`flex border-b border-black dark:border-white w-full`}>
            <div 
                className="
                    flex flex-row items-center justify-between grow 
                    px-4 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20
                    py-2 small-xs:py-3 small-large:py-3.5 medium-sm:py-7"
                >
                <div className="flex flex-row items-center">
                    <Logo />
                </div>

                <div className="">
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
                </div>
            </div>

            <div 
                className="
                    flex flex-row items-center justify-center border-l ml-auto
                    px-3 small-mid:px-3.5 small-large:px-5 extra-large-xs:px-6 extra-large-xs:py-7
                    py-2 small-xs:py-3 small-large:py-3.5 medium-sm:py-7
                    border-l-black dark:border-l-white"
                >
                <ThemeToggleButton />
            </div>
        </div>
    )
}

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