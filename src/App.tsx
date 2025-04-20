import { styled } from '../styled-system/jsx'
import { useApprenticeship } from './hooks/useApprenticeship'

const Container = styled('div', {
  base: {
    color: 'blue',
  },
})

function App() {
  const { apprenticeship, loading } = useApprenticeship()

  console.log({ apprenticeship })
  console.log({ loading })

  return (
    <>
      <Container>Hello 🐼!</Container>
    </>
  )
}

export default App
