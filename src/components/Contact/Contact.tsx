import {motion} from 'framer-motion'
import React from 'react'
import ShinyText from '../ShinyText'
import {CONTACT_LINKS} from './contact-links.data'

const Contact: React.FC = () => {
	return (
		<section className='py-14'>
			<div className='container mx-auto px-6 py-20'>
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					className='max-w-3xl mx-auto'
				>
					<div className='relative text-center mb-16'>
						<ShinyText
							text='Get in Touch'
							speed={3}
							disabled={false}
							className='tracking-widest text-4xl md:text-6xl font-bold mb-6'
						/>
						<p className='text-xl text-gray-300'>
							Let's discuss how I can help improve your software
							testing process
						</p>
					</div>

					<div className='grid gap-6 md:grid-cols-2'>
						{CONTACT_LINKS.map((item, index) => (
							<motion.div
								key={index}
								initial={{opacity: 0, x: -20}}
								animate={{opacity: 1, x: 0}}
								transition={{delay: index * 0.1}}
								className='group'
							>
								{item.href ? (
									<a
										href={item.href}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center p-4 border border-gray-600 text-gray-100  backdrop-blur-md rounded-lg hover:border-blue-400/50 hover:border-blue-400/50hover:shadow-lg hover:shadow-blue-500/10 hover:shadow-lg transition-all hover:transform hover:translate-x-2 '
									>
										<item.icon className='w-6 h-6 text-blue-500 mr-4' />
										<span className='text-gray-300 group-hover:text-white transition-colors'>
											{item.text}
										</span>
									</a>
								) : (
									<div className='flex items-center p-4 border border-gray-600 text-gray-100  backdrop-blur-md rounded-lg hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/10'>
										<item.icon className='w-6 h-6 text-blue-500 mr-4' />
										<span className='text-gray-300'>
											{item.text}
										</span>
									</div>
								)}
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{delay: 0.4}}
						className='mt-16 text-center'
					>
						<p className='text-gray-300'>
							Available for full-time positions and consulting
							opportunities
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default Contact
