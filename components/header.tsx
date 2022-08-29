import React, { useState } from 'react';
import { headerNavigation } from '../context/header-navigation';
import { NAVIGATION_TYPE } from '../types/enums';
import IconButton from './IconButton';
import LinkNavigation from './link-navigation';
import Logo from './logo';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useThemeContainer } from '../state/theme'


type Props = {}

const Header = (props: Props) => {

    const { handleThemeToggle, theme } = useThemeContainer();

    const whatTheme = theme === 'light' ? 'light' : 'dark';

    return (
        <div className={`flex border-b border-black dark:border-white`}>
            <div className="flex flex-row items-center justify-between px-20 py-7 grow">
                <div className="flex flex-row items-center">
                    <Logo />
                </div>

                <div>
                    <nav>
                        <ul className={`flex flex-row items-center list-none space-x-5 font-work-sans`}>
                            {headerNavigation?.map(({name, href, id, type, className, style}, index) => (
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
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>


            <div className="flex flex-row items-center justify-center px-6 py-7 border-l border-l-black dark:border-l-white ml-auto">
                <div className="">
                    <IconButton 
                        containerClassName="border rounded-full" 
                        className={`p-3 ${whatTheme === 'light' ? 'bg-black' : 'bg-white'} transition-all delay-200 ease-linear rounded-full`} 
                        icon={
                            whatTheme === 'light' ? 
                            <BsFillMoonStarsFill className={`text-white ${whatTheme === 'light' ? "visible opacity-100 scale-100" : "opacity-0 scale-0 invisible"} transition-all delay-300 ease-in-out`} /> : 
                            <BsSunFill className={`text-black ${whatTheme === 'dark' ? "visible opacity-100 scale-100" : "opacity-0 scale-0 invisible"} transition-all delay-300 ease-in-out`} />
                        } 
                        handleClick={() => handleThemeToggle(theme)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header