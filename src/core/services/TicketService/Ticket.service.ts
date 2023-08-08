import $api from '../../api/api';
import { IPostTicket } from './types';
import { AxiosResponse } from 'axios';

class TicketService {
	public createTicket = async (data: IPostTicket): Promise<AxiosResponse> => {
		try {
			return await $api.post('ticket/create', data);
		} catch(err) {
		    throw err;
		}
	}
}

export default new TicketService();