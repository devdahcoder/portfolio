import { useEffect } from 'react';
import { ThemeContainer, themeState } from '../state/theme';
import { MainContainer } from '../state/main';
import '../styles/globals.scss';
import { AppPropsWithLayout } from '../types/nextapp';


function MyApp({ Component, pageProps }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <ThemeContainer.Provider>
            <MainContainer.Provider>
                {getLayout(<Component {...pageProps} />)}
            </MainContainer.Provider>
        </ThemeContainer.Provider>
    )
}

export default MyApp
