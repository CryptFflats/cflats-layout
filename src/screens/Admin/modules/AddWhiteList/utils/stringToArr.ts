import { filterEmptyStrings } from './filterEmptyStrings';

export const stringToArr = (addresses: string): string[] => {
	const arr = addresses
		.split(' ')
		.join('')
		.split(',');

	return filterEmptyStrings(arr);
};