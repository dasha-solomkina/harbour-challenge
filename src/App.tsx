import { styled } from '../styled-system/jsx'
import Header from './components/Header'

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
        Hello 🐼!
      </Container>
    </>
  )
}

export default App
