'use client'

import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
	components: {
		MuiButtonBase: {
			defaultProps: {
				style: {
					fontFamily: 'Nunito, sans-serif;',
					fontSize: '2rem',
					lineHeight: '1.5rem',
					fontWeight: 700,
					display: 'inline-block',
					position: 'relative',
					padding: '20px 50px',
					background: '#0f6eb2',
					boxShadow: '3px 6px 6px rgb(0 0 0 / 15%)',
					borderRadius: '50px',
					textDecoration: 'none',
					color: '#FFF',
					textAlign: 'center',
					textTransform: 'uppercase',
					border: 'none',
					cursor: 'pointer',
					outline: 'none',
				}
			}
		},
	},
});
