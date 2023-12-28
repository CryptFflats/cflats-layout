import $api from '../../api/api';
import { AxiosResponse } from 'axios';
import { IGetWhiteList, IPutWhiteList, IWhiteList } from './types';

class WhiteListService {
	public getWhiteList = async (params: IGetWhiteList): Promise<AxiosResponse<IWhiteList>> => {
		return $api.get(`white-list/${params.name}/${params.type}`);
	};

	public updateWhiteList = async (data: IPutWhiteList): Promise<AxiosResponse<IWhiteList>> => {
		return $api.put('white-list', data);
	}
}

export default new WhiteListService();