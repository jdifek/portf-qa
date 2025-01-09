import {useCallback} from 'react'
import Particles from 'react-tsparticles'
import type {Engine} from 'tsparticles-engine'
import {loadSlim} from 'tsparticles-slim'

const AnimatedBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine)
	}, [])

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			options={{
				background: {
					color: 'transparent'
				},
				particles: {
					number: {
						value: 20,
						density: {
							enable: true,
							value_area: 800
						}
					},
					color: {
						value: '#ffffff'
					},
					shape: {
						type: 'char',
						character: {
							value: ['Q', 'A'],
							font: 'Mammoth',
							style: '',
							weight: '400',
							fill: true
						}
					},
					opacity: {
						value: 0.5,
						random: true,
						animation: {
							enable: true,
							speed: 0.5,
							minimumValue: 0.1,
							sync: false
						}
					},
					size: {
						value: 16,
						random: {
							enable: true,
							minimumValue: 12
						}
					},
					move: {
						enable: true,
						speed: 2,
						direction: 'none',
						random: true,
						straight: false,
						outModes: {
							default: 'bounce'
						}
					}
				},
				interactivity: {
					detectsOn: 'window',
					events: {
						onHover: {
							enable: false,
							mode: 'repulse'
						}
					},
					modes: {
						repulse: {
							distance: 100,
							duration: 0.4
						}
					}
				}
			}}
			className='fixed inset-0 z-[-1] pointer-events-none'
		/>
	)
}

export default AnimatedBackground
