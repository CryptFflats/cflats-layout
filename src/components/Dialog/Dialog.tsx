'use client'

import {
	CustomDialog,
	CustomDialogContent,
	CustomDialogContentText,
	CloseButton
} from './styles'
import  IcClose from '../../assets/images/icons/closeIcon.svg'
import React, { FC, ReactNode } from 'react'
import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import { useMediaQuery } from '@mui/material'

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>
) {
	return (
		<Slide
			timeout={{ enter: 10000, exit: 5000 }}
			direction='down'
			ref={ref}
			{...props}
		/>
	)
})

interface DialogProps {
	onClose: () => void
	open: boolean
	children: ReactNode
}

const Dialog: FC<DialogProps> = ({ onClose, open, children }) => {
	const isMobile = useMediaQuery('(max-width: 768px)')

	const closeDialog = (event: React.MouseEvent) => {
		event.stopPropagation()
		onClose()
	}

	return (
		<CustomDialog
			open={open}
			onClose={closeDialog}
			TransitionComponent={Transition}
			keepMounted
			disableScrollLock={true}
		>
			<CustomDialogContent onClick={event => event.stopPropagation()}>
				{!isMobile && (
					<CloseButton onClick={closeDialog}>
						<IcClose />
					</CloseButton>
				)}
				<CustomDialogContentText>{children}</CustomDialogContentText>
			</CustomDialogContent>
		</CustomDialog>
	)
}

export default Dialog
