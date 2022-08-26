import React, { useState } from 'react';
import { headerNavigation } from '../context/header-navigation';
import { NAVIGATION_TYPE } from '../types/enums';
import IconButton from './IconButton';
import LinkNavigation from './link-navigation';
import Logo from './logo';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';


type Props = {}

const Header = (props: Props) => {

    const [isLight, setIsLight] = useState<boolean>(true);

    const handleToggle = () => {
        setIsLight(!isLight)
    }
    return (
        <div className="flex border-b border-black">
            <div className="flex flex-row items-center justify-between px-20 py-7 border-r border-black grow">
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


            <div className="flex flex-row items-center justify-center px-6 py-7 border ml-auto">
                <div>
                    <IconButton 
                        containerClassName="border rounded-full" 
                        className={`p-3 ${isLight ? 'bg-black' : 'bg-white'} transition-all delay-200 ease-linear rounded-full`} 
                        icon={
                            isLight ? 
                            <BsFillMoonStarsFill className={`text-white ${isLight ? "visible opacity-100 scale-100" : "opacity-0 scale-0 invisible"} transition-all delay-300 ease-in-out`} /> : 
                            <BsSunFill className={`text-black ${!isLight ? "visible opacity-100 scale-100" : "opacity-0 scale-0 invisible"} transition-all delay-300 ease-in-out`} />
                        } 
                        handleClick={handleToggle}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header