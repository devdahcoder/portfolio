import '../styles/globals.scss';
import { AppPropsWithLayout } from '../types/nextapp';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(<Component {...pageProps} />)
}

export default MyApp
