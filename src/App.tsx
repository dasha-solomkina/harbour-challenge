import { styled } from '../styled-system/jsx'
import AboutSection from './components/AboutSection'
import Details from './components/Details'
import Header from './components/Header'
// import StickyBar from './components/StickyBar'

const Container = styled('div', {
  base: {
    color: '#535353',
    height: '100vh',
    width: '100%'
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
        Hello 🐼!
      </Container>
    </>
  )
}

export default App
