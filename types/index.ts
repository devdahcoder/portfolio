import { NAVIGATION_TYPE } from "./enums";

export type Id = {
    id: number;
}

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

export type TalkList = {
    id: number;
    talkTitle: string;
    eventTitle: string;
    eventDate: string;
    eventLink: string;
}

export type Talks = {
    id: number;
    year: string;
    talkList: TalkList[];
}

export type Community = {
    id: number;
    image?: string;
    communityTitle: string;
    roleInCommunity: string;
    description: string;
}

export type Contribution = {
    id: number;
    picture: string;
    contributionTitle: string;
}

export type FormikInitValue = {
    name: string;
    email: string;
    message: string;
}