import { NAVIGATION_TYPE } from './../types/enums';
import { HeaderNavigation } from "../types";
import { HeaderNavigationStyle } from '../styles/global-style';


export const headerNavigation: HeaderNavigation[] = [
    {
        id: 1,
        name: "Works",
        href: "#",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 2,
        name: "Contributions",
        href: "#",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 3,
        name: "Talks",
        href: "#",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 4,
        name: "Community",
        href: "#",
        className: `${HeaderNavigationStyle}`,
        style: {},
        type: NAVIGATION_TYPE.LINK,
    },
    {
        id: 5,
        name: "Contact me",
        href: "#",
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
]