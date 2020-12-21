import {NextApiRequest, NextApiResponse} from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!
		})
	],
	pages: {
		signIn: '/auth/signin',
	}
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
