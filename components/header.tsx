import React from 'react';
import { headerNavigation } from '../context/header-navigation';
import { NAVIGATION_TYPE } from '../types/enums';
import LinkNavigation from './link-navigation';
import Logo from './logo';

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <div className="flex flex-row items-center">
                <div>
                    <Logo />
                </div>

                <div>
                    <nav>
                        <ul className={`flex flex-row items-center list-none space-x-5`}>
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


            <div>

            </div>
        </div>
    )
}

export default Header