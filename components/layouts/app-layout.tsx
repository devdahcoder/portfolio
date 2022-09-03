import React from 'react';
import Header from '../header';
import { getMainLayout } from './main-layout';
import BackgroundIcon from '../background-icon';
import RightBackgroundOval from '../../public/icons/right-background-oval';
import LeftBackgroundOval from '../../public/icons/left-background-oval';


type Props = {
    children: React.ReactNode;
}

const AppLayout = (props: Props) => {
    return (
        <div className="relative">
            <div className="">
                {/* <div className="flex items-center justify-center w-screen h-screen bg-white absolute -z-50 ">
                    <div className=" flex items-center justify-center border border-black w-screen h-screen ">
                        <BackgroundIcon 
                            className="w-[70rem] h-full absolute top-0 right-0 z-10 border border-black" 
                            backgroundSvgIcon={<RightBackgroundOval className="w-full h-full" />} 
                        />

                        <BackgroundIcon 
                            className="w-[70rem] h-full absolute top-0 left-0 z-0 border border-black" 
                            backgroundSvgIcon={<LeftBackgroundOval className="w-full h-full" />} 
                        />
                    </div>
                </div> */}

                <div className="border">
                    <Header />
                    {/* <div className="w-full min-h-full">
                        {props?.children}
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export const getAppLayout = (page?: React.ReactElement) => (
    getMainLayout(<AppLayout>{page}</AppLayout>, 'index')
);

export default AppLayout