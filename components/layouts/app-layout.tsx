import React from 'react';
import Header from '../header';
import { getMainLayout } from './main-layout';
import { useMainContainer } from '../../state/main';
import NavigationModal from '../navigation-modal';
import BackgroundGradient from '../background-gradient';
import TextCircle from '../text-circle';



type Props = {
    children: React.ReactNode;
}

const AppLayout = (props: Props) => {

    const { hasPageFullyLoaded } = useMainContainer();

    return (
        <div className="relative">
            <BackgroundGradient />
            <div className="">
                <Header />
                <NavigationModal />
                <div className="">
                    {props?.children}
                </div>
            </div>
        </div>
    )
}

export const getAppLayout = (page?: React.ReactElement) => (
    getMainLayout(<AppLayout>{page}</AppLayout>, 'Olamide — Devdahcoder')
);

export default AppLayout