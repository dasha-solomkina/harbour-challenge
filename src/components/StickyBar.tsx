import { Flex } from '../../styled-system/jsx'

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
      position="absolute"
      bottom={0}
      borderTop="1px solid #DADADA"
    >
      <Flex direction="column">
        <p style={{ fontWeight: 500 }}>Zeptolab</p>
        <p style={{ fontWeight: 300 }}>Marketing Performance</p>
      </Flex>
      <Flex direction="column">
        <p style={{ fontWeight: 500 }}>Location</p>
        <p style={{ fontWeight: 300 }}>Bangkok</p>
      </Flex>
      <Flex direction="column">
        <p style={{ fontWeight: 500 }}>Duration</p>
        <p style={{ fontWeight: 300 }}>1 Year Full-Time</p>
      </Flex>
      <Flex direction="column">
        <p style={{ fontWeight: 500 }}>Start date</p>
        <p style={{ fontWeight: 300 }}>3 Aug 2020</p>
      </Flex>
      <Flex direction="column">
        <p style={{ fontWeight: 500 }}>Application deadline</p>
        <p style={{ fontWeight: 300 }}>30 June 2020</p>
      </Flex>
      <Flex direction="column">
        <p style={{ fontWeight: 500 }}>Application closes in</p>
        <p style={{ fontWeight: 300 }}>6 Day : 22 Hrs : 56 Min</p>
      </Flex>
    </Flex>
  )
}

export default StickyBar
