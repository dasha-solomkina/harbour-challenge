import { Flex, styled } from '../styled-system/jsx'
import AboutSection from './components/AboutSection'
import Details from './components/Details'
// import FeedbackCard from './components/FeedbackCard'
import FeedbackSlider from './components/FeedbackSlider'
import Header from './components/Header'
// import StickyBar from './components/StickyBar'

const Container = styled(Flex, {
  base: {
    flexDirection: 'column',
    color: '#535353',
    width: '100%',
    gap: 40
  }
})

function App() {
  return (
    <>
      <Container>
        <Header />
        {/* <StickyBar /> */}
        <AboutSection />
        <Details />
        {/* <FeedbackCard /> */}
        <FeedbackSlider />
      </Container>
    </>
  )
}

export default App
