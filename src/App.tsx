import { styled } from '../styled-system/jsx'
import AboutSection from './components/AboutSection'
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
        Hello 🐼!
      </Container>
    </>
  )
}

export default App
