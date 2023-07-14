'use client';

import Wrapper from '../../containers/Wrapper/Wrapper';
import { Button, Container, TextField } from '@mui/material';
import AddWhiteList from './modules/AddWhiteList/components/AddWhiteList/AddWhiteList';
const Admin = () => {
	// const [addresses, setAddresses] = useState<string | null>(null);
	// const { address } = useAccount();
	// const cryptoflatsNft = new CryptoflatsNFT(
	// 	MINT_GEN_ZERO_ADDRESS,
	// 	address ? address : '',
	// 	0,
	// 	[],
	// 	[],
	// 	abi
	// )
	//
	// const handleSubmit = async (event: any) => {
	// 	//event.stopPropagation()
	// 	event.preventDefault();
	// 	const addressesArr = addresses
	// 		? addresses
	// 			.split(' ')
	// 			.join('')
	// 			.split(',')
	// 		: [];
	// 	const res = isAddressesVerify(addressesArr)
	//
	// 	if (res) {
	// 		await cryptoflatsNft.addInNewEarlyAccessWhitelistRoot(addressesArr, [])
	// 	}
	// };

	return (
		<main>
			<AddWhiteList />
		</main>
	);
};

export default Admin;