import React from "react";
import { headerNavigation } from "../context/header-navigation";
import { NAVIGATION_TYPE } from "../types/enums";
import LinkNavigation from "./link-navigation";
import StaticNavigationLink from "./static-navigation-link";

type Props = {};

const HeaderNav = (props: Props) => {
    return (
        <nav>
        <ul
            className={`flex flex-row items-center list-none font-inter large-sm:space-x-5`}
        >
            {headerNavigation?.map(
            (
                { name, href, id, type, className, style, subNavigation },
                index
            ) => (
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
            )
            )}
        </ul>
        </nav>
    );
};

export default HeaderNav;
