import { styled } from '../styled-system/jsx'

const Container = styled('div', {
  base: {
    color: 'blue',
  },
})

function App() {
  return (
    <>
      <Container>Hello 🐼!</Container>
    </>
  )
}

export default App
