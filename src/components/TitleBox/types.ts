import { ReactNode } from 'react'

export interface TitleBoxProps {
	className?: string
	children: ReactNode
}

export interface TitleProps {
	className?: string
	children: ReactNode
}

export interface LineAnimProps {
	className?: string,
	theme?: "purple" | "yellow" | "green",
}
