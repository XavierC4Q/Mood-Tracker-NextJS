import React from 'react';
import {providers, signIn} from 'next-auth/client';

export default function SignIn({providers}: {providers: {[key: string]: {name: string; id: string}}}) {
	const googleProvider = providers.google;
	return (
		<div>
			<h2>Welcome Back!</h2>
			<div>
				<button onClick={() => signIn(googleProvider.id)}>Sign in with {googleProvider.name}</button>
			</div>
		</div>
	);
}

SignIn.getInitialProps = async () => {
	return {
		providers: await providers()
	};
};
