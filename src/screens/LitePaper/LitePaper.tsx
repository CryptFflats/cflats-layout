'use client'

import Wrapper from '../../containers/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

const LitePaper = () => {
	return (
		<Wrapper background={'white'}>
			<Header />
			<Layout />
		</Wrapper>
	);
};

export default LitePaper;