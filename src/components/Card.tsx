import { Flex, styled } from '../../styled-system/jsx'
import * as Separator from '@radix-ui/react-separator'

const Title = styled('p', {
  base: {
    color: '#685DC5',
    fontSize: 16,
    fontWeight: 500
  }
})

const Subtitle = styled('p', {
  base: {
    color: '##6A6A6A',
    fontSize: 26,
    fontWeight: 300
  }
})

const SubtitleSmall = styled('p', {
  base: {
    color: '###535353',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.5
  }
})

export const CardExtended = () => {
  return (
    <Flex
      direction="column"
      border="1px solid #DADADA"
      borderRadius={4}
      minWidth={320}
      p={5}
      gap={10}
      height={600}
    >
      <Title>Scholarship value</Title>
      <p style={{ fontSize: 48, fontWeight: 300 }}>€31,300</p>
      <Separator.Root
        orientation="horizontal"
        decorative
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#DADADA',
          marginTop: 'auto',
          marginBottom: 52
        }}
      />
      <Flex p={4} gap={8} wrap="wrap">
        <Flex direction="column">
          <Title>Tuition covered</Title>
          <SubtitleSmall>€20,900</SubtitleSmall>
        </Flex>
        <Flex direction="column">
          <Title>Remaining</Title>
          <SubtitleSmall>€2,000</SubtitleSmall>
        </Flex>
        <Flex direction="column">
          <Title>Living stipend</Title>
          <SubtitleSmall>€8,400 (€700/month)</SubtitleSmall>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const Card = () => {
  return (
    <Flex
      direction="column"
      border="1px solid #DADADA"
      borderRadius={4}
      minWidth={320}
      p={5}
      gap={3}
    >
      <Title>Study commitment</Title>
      <Subtitle>3 hours / day</Subtitle>
      <Separator.Root
        orientation="horizontal"
        style={{
          backgroundColor: '#DADADA',
          width: 30,
          height: 1,
          marginTop: 10
        }}
      />
      <SubtitleSmall fontWeight={300}>
        Immerse yourself in the professional world during your apprenticeship.
        You’ll learn the ropes from the best and get to apply your newly
        acquired knowledge in the field from day one.
      </SubtitleSmall>
    </Flex>
  )
}
