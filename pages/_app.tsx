import { useEffect } from 'react';
import { ThemeContainer, themeState } from '../state/theme';
import '../styles/globals.scss';
import { AppPropsWithLayout } from '../types/nextapp';


function MyApp({ Component, pageProps }: AppPropsWithLayout) {

    // const getLocalStorageTheme = localStorage.getItem('theme');

    const getLayout = Component.getLayout ?? ((page) => page)
    return (

        <ThemeContainer.Provider>
            {getLayout(<Component {...pageProps} />)}
        </ThemeContainer.Provider>
        
    )
}

export default MyApp
