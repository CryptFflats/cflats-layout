import { Variants } from 'framer-motion';

export const lineAppearance: Variants = {
	hidden: {
		width: 0,
	},
	show: {
		width: 'calc(100% - 30px)',

		transition: {
			duration: 0.5,
		}
	}
}