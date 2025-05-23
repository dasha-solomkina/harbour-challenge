import { addYears, format } from 'date-fns'
import { Flex, styled } from '../../../styled-system/jsx'
import useApprenticeshipStore from '../../hooks/useApprenticeshipStore'
import { Title, StyledText } from '../Card'
import Countdown from '../Countdown'

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
    fontSize: { base: 32, lg: 48 },
    lineHeight: '1.3',
    maxWidth: 440,
    mb: { base: 0, lg: 8 }
  }
})

const ActionButton = styled('button', {
  base: {
    backgroundColor: '#685DC5',
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    py: 2,
    px: 4,
    borderRadius: 50,
    cursor: 'pointer',
    _hover: {
      backgroundColor: '#6d2cf3'
    }
  }
})

const HeroSection = ({ isDesktop }: { isDesktop: boolean }) => {
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

  const onApplyNowClick = () => {
    window.open('https://scholarship.harbour.space/', '_blank')
  }

  return (
    <Flex
      px={{ base: 6, md: 10, lg: 40 }}
      direction="column"
      color="#535353"
      id="hero-section"
      mb={10}
      gap={{ base: 8, lg: 0 }}
      pt={{ base: 4, md: 6, lg: 20 }}
    >
      <SectionTitle px={{ base: 0, lg: 10 }}>
        {apprenticeship.name}
      </SectionTitle>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        px={{ base: 0, lg: 10 }}
        gap={{ base: 8, lg: 0 }}
      >
        <Flex
          maxWidth={{ base: '100%', lg: 480 }}
          direction="column"
          gap={10}
          position="relative"
          fontWeight={300}
          order={{ base: 1, lg: 2 }}
        >
          <Flex gap={8} alignItems="center">
            <img
              src={apprenticeship.company_logo}
              alt="Logo"
              style={{ width: 80 }}
            />
            <Flex direction="column">
              <p style={{ fontSize: 18, color: '#000000', opacity: '0.5' }}>
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
              <StyledText>{apprenticeship.location}</StyledText>
            </DetailsContainer>
            <DetailsContainer>
              <Title>Duration</Title>
              <StyledText>
                {`${apprenticeship.duration} Year Full-Time`}
              </StyledText>
            </DetailsContainer>
            <DetailsContainer>
              <Title>Start date</Title>
              <StyledText>{formattedStartDate}</StyledText>
            </DetailsContainer>
            <DetailsContainer>
              <Title>End date</Title>
              <StyledText>{formattedEndDate}</StyledText>
            </DetailsContainer>
          </Card>
        </Flex>

        <Flex
          direction="column"
          maxWidth={{ base: '100%', lg: 440 }}
          gap={8}
          fontSize={{ base: 18, lg: 22 }}
          fontWeight={300}
          lineHeight="1.6"
          order={{ base: 2, lg: 1 }}
        >
          <p style={{ fontWeight: 500 }}>
            A fully funded work-study program to launch your tech career
          </p>
          <p>{apprenticeship.description}</p>
          <p>
            <span style={{ fontWeight: 500 }}>Position: </span>Game Analyst
            Intern
          </p>
          <ActionButton width={166} height={58} onClick={onApplyNowClick}>
            Apply Now
          </ActionButton>
        </Flex>
        {isDesktop && <BackgroundPattern />}
      </Flex>
    </Flex>
  )
}

export default HeroSection
