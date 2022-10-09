import { NAVIGATION_TYPE } from './../types/enums';
import { HeaderNavigation } from "../types";
import { HeaderNavigationStyle } from '../styles/global-style';


export const headerNavigation: HeaderNavigation[] = [
    {
        id: 1,
        name: "Works",
        href: "#work",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 2,
        name: "Talks",
        href: "#talk",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 3,
        name: "Contributions",
        href: "#contribution",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 4,
        name: "Community",
        href: "#community",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 5,
        name: "Contact me",
        href: "#contact",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 5,
        name: "My Resume",
        href: "#",
        className: `border border-black dark:border-white`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 5,
        name: "Menu",
        href: "#",
        className: `border border-black dark:border-white`,
        style: {},
        type: NAVIGATION_TYPE.STATIC,
        // subNavigation?: HeaderNavigation[
        
        // ];
    },
]