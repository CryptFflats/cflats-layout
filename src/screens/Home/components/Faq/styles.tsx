import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';

export const FaqAccordion = styled(Accordion)(({ theme }) => ({
	background: 'transparent',
	color: '#fff',
	boxShadow: 'none',
	borderBottom: '2px solid #fff',
	'&::before': {
		display: 'none'
	},
	'&:first-of-type': {
		borderTopLeftRadius: '0',
		borderTopRightRadius: '0',
		borderTop: '2px solid #fff'
	},
	'&:last-of-type': {
		borderBottomLeftRadius: '0',
		borderBottomRightRadius: '0'
		// borderTop: '2px solid #fff'
	},
	margin: 0
}))

export const FaqAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
	padding: 0,
	paddingRight: '45px',
	justifyContent: 'space-between',
	position: 'relative'
}))

export const FaqAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
	padding: '40px 0 55px'
}))

export const FaqExpandIcon = () => {
	return (
		<Box
			sx={{
				'.Mui-expanded & > .expandIcon': {
					'&::after': {
						transform: 'rotate(0deg)'
					}
				},
				'.expandIcon': {
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-50%)',
					right: '40px',

					'&::before': {
						content: '""',
						position: 'absolute',
						width: '30px',
						height: '2px',
						background: '#fff',
						'@media(max-width: 768px)': {
							width: '20px'
						}
					},

					'&::after': {
						content: '""',
						flexShrink: 0,
						background: '#fff',
						position: 'absolute',
						width: '30px',
						height: '2px',
						transition: '0.3s',
						transform: 'rotate(90deg)',
						'@media(max-width: 768px)': {
							width: '20px'
						}
					}
				}
			}}
		>
			<div className={'expandIcon'}></div>
		</Box>
	)
}