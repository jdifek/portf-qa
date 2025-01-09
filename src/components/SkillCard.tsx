import { motion } from 'framer-motion'
import React from 'react'
import { ISkillCardProps } from '../types'

export const SkillCard: React.FC<ISkillCardProps> = ({
	icon: Icon,
	title,
	description,
	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1 }}
			className='border border-gray-600 text-gray-100  backdrop-blur-md rounded-lg p-6 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/10'
		>
			<Icon className='w-8 h-8 text-blue-400 mb-4' />
			<h3 className='text-xl font-semibold mb-2 text-gray-200'>{title}</h3>
			<p className='text-gray-100/80'>{description}</p>
		</motion.div>
	)
}
