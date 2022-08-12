import React from 'react';
import { getMainLayout } from './main-layout';


type Props = {
    children: React.ReactNode;
}

const AppLayout = (props: Props) => {
    return (
        <div>
            helllllllll boy
            <div>
                {props?.children}
            </div>
        </div>
    )
}

export const getAppLayout = (page?: React.ReactElement) => (
    getMainLayout(<AppLayout>{page}</AppLayout>, 'index')
);

export default AppLayout