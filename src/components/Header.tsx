import { Flex, styled } from '../../styled-system/jsx'
import MenuDropDown from './menu'
import useApprenticeshipStore from '../hooks/useApprenticeshipStore'

const ApplyNowIcon = styled(Flex, {
  base: {
    borderRadius: '100%',
    backgroundColor: '#4fa16c',
    color: 'white',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 100,
    transform: 'translateY(-50%)',
    fontWeight: 500,
    fontSize: '1.1rem',
    textAlign: 'center'
  }
})

const Title = styled('h1', {
  base: {
    fontWeight: 700,
    fontSize: {
      base: '1.2rem',
      md: '1.5rem',
      lg: '1.2rem'
    }
  }
})

const Subtitle = styled('span', {
  base: {
    fontSize: {
      base: '0.7rem',
      md: '0.9rem',
      lg: '1rem'
    }
  }
})

const Header = ({ isDesktop }: { isDesktop: boolean }) => {
  const { apprenticeship } = useApprenticeshipStore()

  return (
    <Flex height={65} direction="column">
      <Flex
        height={65}
        backgroundColor="#685DC5"
        color="white"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        px={{ base: 4, md: 6, lg: 10 }}
        py={{ base: 3, md: 4, lg: 6 }}
      >
        <Flex gap={2}>
          <Title>HARBOUR.SPACE</Title>
          <Subtitle>/{apprenticeship?.name}</Subtitle>
        </Flex>
        <MenuDropDown />
      </Flex>
      {isDesktop && (
        <Flex
          height={65}
          position="relative"
          display={{ base: 'none', lg: 'flex' }}
        >
          <ApplyNowIcon>
            APPLY
            <br />
            NOW
          </ApplyNowIcon>
        </Flex>
      )}
    </Flex>
  )
}

export default Header
