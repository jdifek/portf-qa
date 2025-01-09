import { useState } from 'react'
import About from './components/About/About'
import AnimatedBackground from './components/AnimatedBackground'
import BgLines from './components/BgLines'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import IntroScreen from './components/IntroScreen'
import Navigation from './components/Navigation/Navigation'

function App() {
	const [activeSection, setActiveSection] = useState('about')
	const [showIntro, setShowIntro] = useState(true)

	const renderSection = () => {
		switch (activeSection) {
			case 'about':
				return <About />
			case 'experience':
				return <Experience />
			case 'contact':
				return <Contact />
			default:
				return <About />
		}
	}

	return (
		<div>
			{showIntro ? (
				<IntroScreen onFinish={() => setShowIntro(false)} />
			) : (
				<div>
					<AnimatedBackground />
					<BgLines />
					<Navigation
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
					{renderSection()}
				</div>
			)}
		</div>
	)
}

export default App
