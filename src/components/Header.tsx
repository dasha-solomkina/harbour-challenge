import { Flex, styled } from '../../styled-system/jsx'
import MenuDropDown from './MenuDropDown'

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

const Header = () => {
  return (
    <Flex height={130} direction="column">
      <Flex
        height={65}
        backgroundColor="#685DC5"
        color="white"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        px={50}
        py={25}
      >
        <Flex gap={2}>
          <h1 style={{ fontWeight: 700 }}>HARBOUR.SPACE</h1>
          <span style={{ fontSize: '0.8rem' }}>/INTERACTION DESIGN</span>
        </Flex>
        <MenuDropDown />
      </Flex>
      <Flex height={65} position="relative">
        <ApplyNowIcon>
          APPLY
          <br />
          NOW
        </ApplyNowIcon>
      </Flex>
    </Flex>
  )
}

export default Header
