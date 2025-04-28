import { addYears, format } from 'date-fns'
import { Flex, styled } from '../../../styled-system/jsx'
import useApprenticeshipStore from '../../hooks/useApprenticeshipStore'
import { Title, SubtitleSmall } from '../Card'
import Countdown from '../Countdown'
import { ActionButton } from '../feedback/FeedbackCard'

const Card = styled(Flex, {
  base: {
    border: '1px solid #DADADA',
    py: 8,
    px: 10,
    width: '100%',
    flexWrap: 'wrap',
    gap: 2,
    backgroundColor: '#FFFFFF',
    zIndex: 2
  }
})

const BackgroundPattern = styled(Flex, {
  base: {
    position: 'absolute',
    top: '75%',
    left: '60%',
    transform: 'translateX(h50%)',
    width: 560,
    height: 257,
    zIndex: 0,
    backgroundImage: "url('public/hero-bg-pattern.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})

const DetailsContainer = styled(Flex, {
  base: {
    flexDirection: 'column',
    width: 'calc(50% - 10px)'
  }
})

export const SectionTitle = styled('h2', {
  base: {
    color: '#685DC5',
    fontWeight: 500,
    fontSize: 48,
    lineHeight: '1.3'
  }
})

const HeroSection = () => {
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
      px={60}
      color="#535353"
      id="hero-section"
      mb={10}
      justifyContent="space-between"
    >
      <Flex
        direction="column"
        maxWidth={440}
        gap={8}
        fontSize={22}
        fontWeight={300}
        lineHeight="1.6"
      >
        <SectionTitle>{apprenticeship.name}</SectionTitle>
        <p style={{ fontWeight: 500 }}>
          A fully funded work-study program to launch your tech career
        </p>
        <p>{apprenticeship.description}</p>
        <p>
          <span style={{ fontWeight: 500 }}>Position: </span>Game Analyst Intern
        </p>
        <ActionButton width={166} height={58}>
          Apply Now
        </ActionButton>
      </Flex>
      <Flex
        maxWidth={480}
        direction="column"
        gap={10}
        position="relative"
        fontWeight={300}
      >
        <Flex gap={8} alignItems="center">
          <img
            src={apprenticeship.company_logo}
            alt="Logo"
            style={{ width: 80 }}
          />
          <Flex direction="column">
            <p
              style={{
                fontSize: 18,
                color: '#000000',
                opacity: '0.5'
              }}
            >
              Powered by:
            </p>
            <p style={{ fontSize: 27 }}>{apprenticeship.company_name}</p>
          </Flex>
        </Flex>
        <Card>
          <Countdown baseDate={apprenticeship.application_end_date} />
        </Card>
        <Card>
          <DetailsContainer>
            <Title>Location</Title>
            <SubtitleSmall>{apprenticeship.location}</SubtitleSmall>
          </DetailsContainer>
          <DetailsContainer>
            <Title>Duration</Title>
            <SubtitleSmall>
              {`${apprenticeship.duration} Year Full-Time`}
            </SubtitleSmall>
          </DetailsContainer>
          <DetailsContainer>
            <Title>Start date</Title>
            <SubtitleSmall>{formattedStartDate}</SubtitleSmall>
          </DetailsContainer>
          <DetailsContainer>
            <Title>End date</Title>
            <SubtitleSmall>{formattedEndDate}</SubtitleSmall>
          </DetailsContainer>
        </Card>
      </Flex>
      <BackgroundPattern />
    </Flex>
  )
}

export default HeroSection
