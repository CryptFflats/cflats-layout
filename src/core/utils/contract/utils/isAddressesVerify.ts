import { isAddress } from 'ethers/lib/utils';

export const isAddressesVerify = (addresses: string[]): boolean => {
	if (!addresses || !addresses.length) return false;

	let flag: boolean = false;

	for (let address of addresses) {
		flag = isAddress(address);
		if (!flag) break;
	}

	return flag;
}