import { $api } from '../../../../../core/api/api';

class WhiteListService {
	getGenZeroFree = async (): Promise<string[]> => {
		const { data } = await $api.get('/genZero/freeList');

		return data;
	}

	addToGenZeroDiscount = async (data: IAddToGenZeroWl) => {
		const response = await $api.post('/genZero/addMultipleDiscountList', data);

		return response
	}

	addToGenZeroFree = async (data: IAddToGenZeroWl) => {
		const response = await $api.post('/genZero/addMultipleFreeList', data);

		return response
	}

	getGenZeroDiscount = async (): Promise<string[]> => {
		const { data } = await $api.get('/genZero/whiteList');

		return data;
	}

}

export default new WhiteListService();

interface IAddToGenZeroWl {
	addresses: string[]
}