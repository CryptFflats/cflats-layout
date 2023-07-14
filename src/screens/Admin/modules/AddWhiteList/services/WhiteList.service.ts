import { $host } from '../../../../../core/api/api';

class WhiteListService {
	getGenZeroFree = async (): Promise<string[]> => {
		const { data } = await $host.get('/genZero/freeList');

		return data;
	}

	addToGenZeroDiscount = async (data: IAddToGenZeroWl) => {
		const response = await $host.post('/genZero/addMultipleFreeList', data);

		return response
	}

	getGenZeroDiscount = async (): Promise<string[]> => {
		const { data } = await $host.get('/genZero/whiteList');

		return data;
	}

}

export default new WhiteListService();

interface IAddToGenZeroWl {
	addresses: string[]
}