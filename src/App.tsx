import { Flex, styled } from '../styled-system/jsx'
import Details from './components/Details'
import FAQ from './components/FAQ'
import FeedbackSlider from './components/feedback/index'
import Header from './components/Header'
import HeroSection from './components/hero/HeroSection'
import StickyBar from './components/StickyBar'
import { useEffect, useState } from 'react'
import { useApprenticeship } from './hooks/useApprenticeship'
import AboutSection from './components/about'

const Container = styled(Flex, {
  base: {
    flexDirection: 'column',
    color: '#535353',
    gap: 10,
    width: '100vw'
  }
})

function App() {
  const [showStickyBar, setShowStickyBar] = useState(false)
  const { loading } = useApprenticeship()
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const screenIsDesktop = window.innerWidth >= 1440
    setIsDesktop(screenIsDesktop)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight =
        document.getElementById('hero-section')?.offsetHeight || 0

      setShowStickyBar(scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Container>
        <Header />
        <HeroSection />
        {showStickyBar && isDesktop && <StickyBar />}
        <AboutSection />
        <Details />
        <FeedbackSlider />
        <FAQ />
      </Container>
    </>
  )
}

export default App
