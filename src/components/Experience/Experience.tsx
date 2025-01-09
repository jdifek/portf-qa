import {Center, useGLTF} from '@react-three/drei'
import {Canvas, useFrame} from '@react-three/fiber'
import {Suspense, useRef} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {IModelProps, ISceneProps} from '../../types'
import ShinyText from '../ShinyText'
import './loader.css'

function Model({url, scale, rotation}: IModelProps) {
	const {scene} = useGLTF(url) as {scene: THREE.Object3D}
	const meshRef = useRef<THREE.Mesh>(null)

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.01 // Вращение вокруг оси Y
		}
	})

	return (
		<Center>
			<primitive
				object={scene}
				scale={scale} // Масштабирование модели
				rotation={rotation} // Применяем вращение
				ref={meshRef}
			/>
		</Center>
	)
}

function Scene({url, scale, rotation}: ISceneProps) {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<spotLight
				position={[10, 10, 10]}
				angle={0.15}
				penumbra={1}
			/>
			<pointLight position={[-10, -10, -10]} />
			<Suspense fallback={null}>
				<Model
					url={url}
					scale={scale}
					rotation={rotation}
				/>
			</Suspense>
		</Canvas>
	)
}

const Experience = () => {
	return (
		<section className='py-14'>
			<div className='container mt-6 mx-auto px-6 relative'>
				<Swiper
					direction='vertical'
					spaceBetween={50}
					slidesPerView={1}
					pagination={{
						clickable: true
					}}
					modules={[Navigation, Pagination]}
					className='mb-12'
				>
					{PROJECT_ITEMS.map((project, index) => {
						// Разворачиваем первую модель лицом
						const rotation =
							index === 0 ? [90, Math.PI / 6, 660] : [0, 0, 0] // Для первой модели, вращаем на 180 градусов по оси Y

						return (
							<SwiperSlide key={project.id}>
								<div
									className={` grid md:grid-cols-2 gap-6 items-center h-full cursor-grab ${
										project.id === 3 ? 'mt-0' : 'mt-8'
									}`}
								>
									<div
										className={`relative p-5 md:p-0 ${
											project.id === 3
												? 'h-auto'
												: 'h-full'
										}`}
									>
										<ShinyText
											text={project.title}
											disabled={false}
											speed={3}
											className='text-lg lg:text-3xl md:text-2xl font-bold mb-6'
										/>
										<div className='absolute left-0 top-24 transform -translate-y-1/2 bg-blue-800 w-14 h-48 -z-10' />
										<p
											key={`desc-${project.id}`}
											className='bg-gradient-to-r from-gray-100 to-gray-500 text-transparent bg-clip-text mb-4 xl:mb-6 whitespace-pre-line text-sm 2xl:text-lg tracking-widest pl-5'
										>
											{project.description
												.split('•')
												.filter(Boolean) // Убираем пустые строки, если они есть
												.map((sentence, idx) => (
													<span
														key={idx}
														className='block'
													>
														• {sentence.trim()}
													</span>
												))}
										</p>
										<div className='flex flex-wrap gap-3 mb-4'>
											{project.technologies.map(tech => (
												<span
													key={tech}
													className='px-4 py-2 text-sm border border-gray-600 text-gray-100 backdrop-blur-md rounded-lg tracking-widest'
												>
													{tech}
												</span>
											))}
										</div>
									</div>
									<div className='h-[600px]'>
										<Scene
											url={project.modelUrl}
											scale={
												index === 1 || index === 2
													? [10, 10, 10]
													: [1, 1, 1]
											} // Увеличиваем вторую и третью модели в 7 раз, первую немного уменьшаем
											rotation={rotation} // Применяем вращение для первой модели
										/>
									</div>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}

export default Experience

export const PROJECT_ITEMS = [
	{
		id: 1,
		title: 'Automation JS/TS QA Engineer, Clinch - AdTech',
		description: `• Built a testing framework from scratch using JavaScript, TypeScript, and Playwright 
        • Set up Jenkins pipelines with Docker for automated test execution 
        • Integrated the framework with external services and tools to enhance functionality 
        • Adding features and optimizing the framework for continuous improvement 
        • Writing and executing regression, API, and UI tests suites 
        • Leading the QA team, overseeing process optimization and continuous improvement 
        • Mentoring QA team members, conducting code reviews, and setting team goals`,
		technologies: ['Cypress', 'TypeScript', 'GitHub Actions'],
		modelUrl: '/mechanical_keyboard_-_aesthetic.glb'
	},
	{
		id: 2,
		title: 'Automation JavaScript QA Engineer, GlobalLogic - Healthcare',
		description:
			'• Developing automated test cases using JavaScript and Selenium Web-Driver • Requirements, documentation analysis. Regression investigation via Jenkins CI/CD • Test planning. Customer communication. Test design covering, risks analysis • Executing automated scripts using Appium, Perfecto for both Android and iOS • Manual testing using real devices, iOS, Android, insulin pump emulator • Utilized various testing methods such as White-Box, Black-Box, Exploratory etc',
		technologies: ['Postman', 'Newman', 'Jenkins', 'JMeter'],
		modelUrl: '/28e9373b8550488bac26b3c35ac2225a.glb'
	},
	{
		id: 3,
		title: 'Mobile App Testing',
		description:
			'Implemented automated testing for iOS and Android applications.',
		technologies: ['Appium', 'Java', 'TestNG', 'BrowserStack'],
		modelUrl: '/asus_rog_zephyrus_g14_2024.glb'
	}
]
