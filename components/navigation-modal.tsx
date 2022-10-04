import React from 'react';
import Link from 'next/link';
import { headerNavigation } from '../context/header-navigation';
import { HeaderNavigation } from '../types';

type Props = {}

const NavigationModal = (props: Props) => {
    return (
        <div className="fixed left-0 top-0 w-full h-full bg-white dark:bg-dark-bg z-50">

            <div className="w-full max-w-xl my-0 mx-auto mt-24">
                <ul className="flex flex-col">

                    {
                        headerNavigation.slice(0, -1)?.map((navigation: HeaderNavigation, index: number) => {
                            const { href, id, name, type, className, style, subNavigation } = navigation;
                            return (
                                <li className="border-b" key={index}>
                                    <Link href={href}>
                                        <a className="text-green-200 w-full flex flex-row items-center font-inter py-5">
                                            <span className="pl-5 pr-24 w-full max-w-[8rem] text-base py-2">{id > 9 ? '' : '0'}{id}.</span> 
                                            <div className="flex flex-row items-center justify-center uppercase font-medium text-5xl">
                                                {name}.
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavigationModal