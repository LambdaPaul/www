import type { AppProps } from 'next/app'
import 'normalize.css';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}