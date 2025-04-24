import { Flex, styled } from '../styled-system/jsx'
import AboutSection from './components/AboutSection'
import Details from './components/Details'
import FAQ from './components/FAQ'
import FeedbackSlider from './components/FeedbackSlider'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StickyBar from './components/StickyBar'
import { useEffect, useState } from 'react'

const Container = styled(Flex, {
  base: {
    flexDirection: 'column',
    color: '#535353',
    gap: 10,
    paddingBottom: '86px',
    width: '100vw'
  }
})

function App() {
  const [showStickyBar, setShowStickyBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight =
        document.getElementById('hero-section')?.offsetHeight || 0

      setShowStickyBar(scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Container>
        <Header />
        <HeroSection />
        {showStickyBar && <StickyBar />}
        <AboutSection />
        <Details />
        <FeedbackSlider />
        <FAQ />
      </Container>
    </>
  )
}

export default App
