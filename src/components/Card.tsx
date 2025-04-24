import { Flex, styled } from '../../styled-system/jsx'
import * as Separator from '@radix-ui/react-separator'
import { ApprenticeshipDetails } from '../hooks/useApprenticeshipStore'

export const Title = styled('p', {
  base: {
    color: '#685DC5',
    fontSize: 16,
    fontWeight: 500
  }
})

const Subtitle = styled('p', {
  base: {
    color: '#6A6A6A',
    fontSize: 26,
    fontWeight: 300
  }
})

export const SubtitleSmall = styled('p', {
  base: {
    color: '#535353',
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 1.5
  }
})

export const DetailsCardExtended = ({
  apprenticeship
}: {
  apprenticeship: ApprenticeshipDetails
}) => {
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
      <Title pl={4}>Scholarship value</Title>
      <p
        style={{ fontSize: 48, fontWeight: 300, paddingLeft: 16 }}
      >{`€${apprenticeship.total_value}`}</p>
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
          <SubtitleSmall>{`€${apprenticeship.tuition}`}</SubtitleSmall>
        </Flex>
        <Flex direction="column">
          <Title>Remaining</Title>
          <SubtitleSmall>{`€${apprenticeship.remaining}`}</SubtitleSmall>
        </Flex>
        <Flex direction="column">
          <Title>Living stipend</Title>
          <SubtitleSmall>
            {`€${apprenticeship.stipend_per_year} (€${apprenticeship.stipend_per_month}/month)`}
          </SubtitleSmall>
        </Flex>
      </Flex>
    </Flex>
  )
}

interface DetailsCard {
  title: string
  subtitle: string
  text: string
}

export const DetailsCard = ({ title, subtitle, text }: DetailsCard) => {
  return (
    <Flex
      direction="column"
      border="1px solid #DADADA"
      borderRadius={4}
      minWidth={320}
      minHeight={200}
      p={5}
      gap={3}
    >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Separator.Root
        orientation="horizontal"
        style={{
          backgroundColor: '#DADADA',
          width: 30,
          height: 1,
          marginTop: 10
        }}
      />
      <SubtitleSmall>{text}</SubtitleSmall>
    </Flex>
  )
}
