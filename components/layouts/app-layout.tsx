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

    const { hasPageFullyLoaded, name } = useMainContainer();

    return (
        <div className="relative">
            <BackgroundGradient />
            <TextCircle 
                text={"design is life - design is life - design is life - "} 
                className={`${hasPageFullyLoaded ? 
                `!z-0 transition-all duration-500 ease-in-out absolute
                left-[5.5rem] small-xs:left-32 medium-xs:left-[24rem] large-sm:left-[30rem] extra-large-xs:left-[32rem] extra-large-mid:left-[43.5rem]
                top-[5.5rem] small-mid:top-[6rem] medium-xs:top-[7rem] medium-sm:top-[9rem] large-xs:top-36
                large-sm:top-52 extra-large-xs:top-[13rem] extra-large-mid:top-52`
                : 
                "z-50 -top-12 -left-12 fixed"}`} 
            />
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