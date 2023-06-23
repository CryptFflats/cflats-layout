import React from 'react'
import { Box } from '@mui/material'
import { TabWrapper } from './styles'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
	image: string
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, image, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`rarity-tabpanel-${index}`}
			aria-labelledby={`rarity-tab-${index}`}
			{...other}
		>
			{value === index && (
				<TabWrapper
					style={{
						background: `url(${image})`
					}}
				>
					{children}
				</TabWrapper>
			)}
		</div>
	)
}

export default TabPanel
