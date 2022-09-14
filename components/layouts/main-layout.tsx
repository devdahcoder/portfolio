import React, { ReactElement, ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { useThemeContainer } from '../../state/theme';

type Props = {
    children?: ReactNode;
    title?: string;
};

const MainLayout = ({title = 'This is the default title', children}: Props) => {

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Generated by create next app" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <div className="">
                {children}
            </div>
        </div>
    )
}


export const getMainLayout = (page?: ReactElement, title?: string) => (
    <MainLayout title={title}>{page}</MainLayout>
);

export default MainLayout;
