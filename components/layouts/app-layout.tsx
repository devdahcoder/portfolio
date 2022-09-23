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
                {/* <div className="flex items-center justify-center w-screen h-screen bg-white fixed -z-50 ">
                    <div className="flex items-center justify-center  w-screen h-screen ">
                        

                        <LeftBackgroundOval className="w-full h-full" />
                        <RightBackgroundOval className="w-full h-full" />
                        
                        

                    </div>
                </div> */}

                
                        {/* <BackgroundIcon 
                            className="grow h-full border border-black" 
                            backgroundSvgIcon={<LeftBackgroundOval className="w-full h-screen" />} 
                        />
                        <BackgroundIcon 
                            className="grow h-full border border-black" 
                            backgroundSvgIcon={<RightBackgroundOval className="w-full h-screen" />} 
                        /> */}

                <div className="border">
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
    getMainLayout(<AppLayout>{page}</AppLayout>, 'Olamide--Devdahcoder')
);

export default AppLayout