import Header from '../../../screens/Admin/layouts/Header/Header';
import { ReactNode } from 'react';
import Wrapper from '../../../containers/Wrapper/Wrapper';

const Layout = ({ children } : { children: ReactNode }) => {
	return (
		<Wrapper background={'gray'}>
			<Header />
			{children}
		</Wrapper>
	);
};

export default Layout;