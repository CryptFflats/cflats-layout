import styles from './User.module.scss'
import { HiUserCircle } from 'react-icons/hi'
import { useTranslations } from 'next-intl';

const User = () => {
	const t = useTranslations('Info')

	return (
		<div className={styles.userInfo}>
			<i><HiUserCircle size={50} /></i>
			<i>{t('walletSidebar.myWallet')}</i>
		</div>
	);
};

export default User;