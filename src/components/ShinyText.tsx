import {IShinyTextProps} from '../types'

const ShinyText = ({
	text,
	disabled = false,
	speed = 3,
	className = '',
	bigMode = false
}: IShinyTextProps) => {
	const animationStyle = !disabled
		? {
				animationDuration: `${speed}s`
		  }
		: undefined

	if (bigMode) {
		return (
			<div className={`relative inline-block ${className}`}>
				<span className='absolute top-0 left-0 text-white'>{text}</span>
				<span className='relative -bottom-[2px] text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-white'>
					{text}
				</span>
			</div>
		)
	}

	return (
		<div
			className={`inline-block ${
				!disabled ? 'text-outline' : ''
			} ${className}`}
			style={animationStyle}
		>
			{text}
		</div>
	)
}

export default ShinyText
