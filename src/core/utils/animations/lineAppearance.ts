import { Variants } from 'framer-motion';

export const lineAppearance: Variants = {
	hidden: {
		width: 0,
	},
	show: {
		width: '800px',

		transition: {
			duration: 0.5,
		}
	}
}