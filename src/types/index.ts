import {LucideIcon} from 'lucide-react'

export interface INavigationProps {
	activeSection: string
	setActiveSection: (section: string) => void
}

export interface ISkillCardProps {
	icon: LucideIcon
	title: string
	description: string
	index: number
}

export interface IModelProps {
	url: string
	scale: number[]
	rotation: number[]
}

export interface ISceneProps {
	url: string
	scale: number[]
	rotation: number[]
}

export interface IShinyTextProps {
	text: string
	disabled?: boolean
	speed?: number
	className?: string
	bigMode?: boolean
}
