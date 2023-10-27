import { isAddress } from 'ethers';

export const isAddressesVerify = (addresses: string[]): boolean => {
	if (!addresses || !addresses.length) return false;

	let flag: boolean = false;

	for (let address of addresses) {
		flag = isAddress(address);
		if (!flag) break;
	}

	return flag;
}