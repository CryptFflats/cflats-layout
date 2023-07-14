import React, { createContext, FC, ReactNode, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext<{
	authState: null | string;
	setAuthState: (userAuthInfo: string) => void;
	isUserAuthenticated: () => false | undefined;
} | null>(null)
const { Provider } = AuthContext;

interface IAuthProvider {
	children: ReactNode
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
	const [authState, setAuthState] = useState<null | string>();

	const setUserAuthInfo = (data: string) => {
		const token = Cookies.set("token", data);

		setAuthState(token);
	};

	// checks if the user is authenticated or not
	const isUserAuthenticated = () => {
		if (!authState) {
			return false;
		}
	};

	return (
		<Provider
			value={{
				authState: authState as null,
				setAuthState: (userAuthInfo: string) => setUserAuthInfo(userAuthInfo),
				isUserAuthenticated,
			}}
		>
			{children}
		</Provider>
	);
};

export { AuthContext, AuthProvider };