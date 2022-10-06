import React from 'react';
import Link from 'next/link';
import { headerNavigation } from '../context/header-navigation';
import { HeaderNavigation } from '../types';
import { motion } from 'framer-motion';
import { useMainContainer } from '../state/main';
import BackgroundGradient from './background-gradient';



type Props = {}

const modalVariant = {
    hidden: { opacity: 0, transition: { delay: 2 } },
    visible: { opacity: 1 }
}

const spanVariant = {
    hidden: (index: number) => ({ 
        y: "-100%", 
        transition: {
            delay: index * 0.3,
            duration: 0.7,
            ease: "circOut",
        }
    }),
    visible: (index: number) => ({ 
        y: 0, 
        transition: {
            delay: index * 0.3,
            duration: 0.7,
            ease: "circOut",
        }
    })
}

const NavigationModal = (props: Props) => {

    const { navigationModal } = useMainContainer();

    return (
        <motion.div 
            variants={modalVariant}
            initial="hidden"
            animate={navigationModal ? "visible" : "hidden"}
            className={`fixed left-0 top-0 w-full h-full z-30 ${navigationModal ? "pointer-events-auto" : "pointer-events-none"}`}
        >

            <div className="grid grid-cols-4 absolute left-0 top-0 w-full h-full">
                {[1, 2, 3, 4].map((index: number) => {
                return (
                    <motion.span 
                        key={index}
                        custom={index}
                        variants={spanVariant}
                        initial="hidden"
                        animate={ navigationModal ? "visible" : "hidden"}
                        className="bg-white dark:bg-dark-bg"
                    >
                    </motion.span>
                )
            })}
            </div>


            <div
                className="z-50"
            >
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
        </motion.div>
    )
}

export default NavigationModal