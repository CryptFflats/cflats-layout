import Admin from '../../../screens/Admin/Admin';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cryptoflats - Admin'
}

const AdminPage = () => {
	return <Admin />
}

export default AdminPage