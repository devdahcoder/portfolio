import React from 'react';
import Header from '../header';
import { getMainLayout } from './main-layout';
import BackgroundIcon from '../background-icon';
import RightBackgroundOval from '../../public/icons/right-background-oval';
import LeftBackgroundOval from '../../public/icons/left-background-oval';
import Menu from '../menu';
import { useMainContainer } from '../../state/main';
import NavigationModal from '../navigation-modal';


type Props = {
    children: React.ReactNode;
}

const AppLayout = (props: Props) => {

    const { hasPageFullyLoaded, navigationModal } = useMainContainer();
    return (
        <div className="relative">
            {/* <Menu /> */}
            { navigationModal && <NavigationModal />}
            <div className="">
                <div className={`flex items-center justify-center w-screen h-screen bg-white dark:bg-dark-bg fixed transition-all duration-500 ease-in-out ${ hasPageFullyLoaded ? '-z-50' : 'z-50'}  `}>
                    <div className="flex animate-spin-slow items-center justify-center w-screen h-screen ">
                        
                        <LeftBackgroundOval className="left-bg-oval border w-full h-fit" />
                        <RightBackgroundOval className="right-bg-oval border w-full h-full" />
                        
                    </div>
                </div>

                <div className="">
                    <Header />
                    <div className="w-full min-h-full">
                        {props?.children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export const getAppLayout = (page?: React.ReactElement) => (
    getMainLayout(<AppLayout>{page}</AppLayout>, 'Olamide — Devdahcoder')
);

export default AppLayout