import styles from './LanguageMenu.module.scss'
import { BiArrowBack } from 'react-icons/bi'
import ProfileButton from '../ProfileButton/ProfileButton'
import LanguageButton from './LanguageButton'
import { setTypeMenu } from '../../slices/ProfileSidebarSlice'
import { useTranslations } from 'next-intl';
import { useAppDispatch } from '../../../../../../core/hooks/store.hook';

const LanguageMenu = () => {
	const dispatch = useAppDispatch()
	const t  = useTranslations('Info')


	return (
		<ul className={styles.languageMenu}>
			<li>
				<ProfileButton
					onClick={() => dispatch(setTypeMenu('menu'))}
					icon={<BiArrowBack />}
					text={t('profileSidebar.chooseLanguage')}
				/>
			</li>
			<li>
				<LanguageButton lang={'en'}>English</LanguageButton>
			</li>
			<li>
				<LanguageButton lang={'ru'}>Русский</LanguageButton>
			</li>
		</ul>
	)
}

export default LanguageMenu
