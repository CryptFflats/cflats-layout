import { AuthOptions } from 'next-auth';
import * as process from 'process';
import Credentials from 'next-auth/providers/credentials';
import { CredentialsProvider } from 'next-auth/providers/credentials';

const API_TOKEN = process.env.API_TOKEN as string

export const authConfig: AuthOptions = {
	providers: [
		Credentials({
			name: 'login-in',
			credentials: {
				login: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const res = await fetch(`http://localhost:8000/api/auth/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						login: credentials?.login,
						password: credentials?.password,
					}),
				});

				const token = await res.json();

				if (token) {
					return token;
				} else {
					return null;
				}
				// const user = {
				// 	name: 'aboba',
				// 	surname: 'abobavich'
				// }
				//
				// if (credentials?.login !== 'aboba' && credentials?.password !== '0') {
				// 	return null
				// } else {
				// 	return user
				// }
			},
		})
	],
	// callbacks: {
	// 	async jwt({ token }) {
	// 		return { ...token };
	// 	},
	// 	async session({ session, token }) {
	// 		session.user = token as any;
	// 		return session;
	// 	},
	// }
}