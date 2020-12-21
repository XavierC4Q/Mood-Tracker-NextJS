import {NextComponentType} from 'next';
import {Provider} from 'next-auth/client';
import '../styles/globals.scss';

function MyApp({Component, pageProps}: {Component: NextComponentType; pageProps: any}) {
	return (
		<Provider session={pageProps.session}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
