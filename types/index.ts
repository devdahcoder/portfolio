import { NAVIGATION_TYPE } from "./enums";

export type HeaderNavigation = {
    id: number,
    name: string,
    href: string,
    className?: string;
    style?: React.CSSProperties;
    type: NAVIGATION_TYPE;
    subNavigation?: HeaderNavigation[];
}

export type Work = {
    id: number;
    header: string;
    description: string;
    href: string;
    image: string;
}