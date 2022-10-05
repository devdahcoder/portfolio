import React from 'react';
import Header from '../header';
import { getMainLayout } from './main-layout';
import { useMainContainer } from '../../state/main';
import NavigationModal from '../navigation-modal';
import BackgroundGradient from '../background-gradient';


type Props = {
    children: React.ReactNode;
}

const AppLayout = (props: Props) => {

    return (
        <div className="relative">
            <div className="">
                <BackgroundGradient />
                <div className="">
                    <Header />
                    <NavigationModal />
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