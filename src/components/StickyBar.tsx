import { Flex, styled } from '../../styled-system/jsx'

const Title = styled('p', {
  base: {
    fontWeight: 500
  }
})

const SubTitle = styled('p', {
  base: {
    fontWeight: 300
  }
})

const StickyBar = () => {
  return (
    <Flex
      height={86}
      width="100%"
      py={5}
      px={20}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      position="fixed"
      bottom={0}
      left={0}
      borderTop="1px solid #DADADA"
      zIndex={9999}
    >
      <Flex direction="column">
        <Title>Zeptolab</Title>
        <SubTitle>Marketing Performance</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Location</Title>
        <SubTitle>Bangkok</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Duration</Title>
        <SubTitle>1 Year Full-Time</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Start date</Title>
        <SubTitle>3 Aug 2020</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Application deadline</Title>
        <SubTitle>30 June 2020</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Application closes in</Title>
        <SubTitle>6 Day : 22 Hrs : 56 Min</SubTitle>
      </Flex>
    </Flex>
  )
}

export default StickyBar
