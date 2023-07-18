import Header from '../../../screens/Admin/layouts/Header/Header';
import { ReactNode } from 'react';
import Wrapper from '../../../containers/Wrapper/Wrapper';
import AuthProvider from '../../../core/providers/AuthProvider';

const Layout = ({ children } : { children: ReactNode }) => {
	return (
		<AuthProvider>
			<Wrapper background={'gray'}>
				<Header />
				{children}
			</Wrapper>
		</AuthProvider>
	);
};

export default Layout;