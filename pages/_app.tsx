import {NextComponentType} from 'next';
import '../styles/globals.css';

function MyApp({Component, pageProps}: {Component: NextComponentType; pageProps: any}) {
	return <Component {...pageProps} />;
}

export default MyApp;
