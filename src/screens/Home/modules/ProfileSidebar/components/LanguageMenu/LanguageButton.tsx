import { styled } from '@mui/material/styles'
import { Button } from '@mui/material';
import { FC, ReactNode } from 'react';
import { IoMdCheckmark } from 'react-icons/io'
import { useLocale } from 'use-intl';

type typeLang = 'ru' | 'en'

interface LanguageButtonProps {
	children: ReactNode
	lang: typeLang
}

const LanguageButton: FC<LanguageButtonProps> = ({ children, lang }) => {
	const language = useLocale();

	return (
		<StylesButton href={`/${lang}`}>
			<p>{children}</p>
			{language === lang && <IoMdCheckmark size={30} />}
		</StylesButton>
	)
}

export default LanguageButton

export const StylesButton = styled(Button)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'start',
	borderRadius: '0px',
	width: '100%',
	transition: '0.4s',
	gap: '50px',
	padding: '20px 50px',
	color: '#fff',
	textDecoration: 'none',
	fontSize: '1.5rem',
	fontFamily: 'Open Sans, sans-serif',
	lineHeight: '1.7rem',
	fontWeight: 600,
	textTransform: 'none',
	'&:hover': {
		background: '#3D3D3D'
	},

	'> i': {
		fontSize: '35px',
		'@media(max-width: 576px)': {
			fontSize: '30px'
		}
	},
	'@media(max-width: 576px)': {
		padding: '20px 30px'
	}
}))
