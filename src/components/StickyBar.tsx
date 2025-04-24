import { addYears, format } from 'date-fns'
import { Flex, styled } from '../../styled-system/jsx'
import useApprenticeshipStore from '../hooks/useApprenticeshipStore'
import { MiniCountdown } from './Countdown'

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
  const { apprenticeship } = useApprenticeshipStore()
  if (!apprenticeship) return <></>

  const formattedStartDate = format(
    new Date(apprenticeship.scholarship_start_date),
    'dd MMMM yyyy'
  )

  const endDate = addYears(
    apprenticeship.scholarship_start_date,
    apprenticeship.duration
  )

  const formattedEndDate = format(endDate, 'dd MMMM yyyy')

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
        <Title>{apprenticeship?.company_name}</Title>
        <SubTitle>Game Analyst Intern</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Location</Title>
        <SubTitle>Bangkok</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Duration</Title>
        <SubTitle> {`${apprenticeship?.duration} Year Full-Time`}</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Start date</Title>
        <SubTitle>{formattedStartDate}</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Application deadline</Title>
        <SubTitle>{formattedEndDate}</SubTitle>
      </Flex>
      <Flex direction="column">
        <Title>Application closes in</Title>
        <SubTitle>
          <MiniCountdown baseDate={apprenticeship.application_end_date} />
        </SubTitle>
      </Flex>
    </Flex>
  )
}

export default StickyBar
