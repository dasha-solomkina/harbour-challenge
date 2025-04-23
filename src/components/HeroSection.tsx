import { Flex, styled } from '../../styled-system/jsx'
import { Title, SubtitleSmall } from './Card'
import { ActionButton } from './FeedbackCard'

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
    top: '95%',
    left: '65%',
    transform: 'translateX(h50%)',
    width: 560,
    height: 257,
    zIndex: 0,
    backgroundImage: "url('public/hero-bg-pattern.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})

const HeroSection = () => {
  return (
    <Flex width="100%" px={40} color="#535353" gap={20}>
      <Flex direction="column" width="50%" gap={6}>
        <p
          style={{
            color: '#685DC5',
            fontWeight: 500,
            fontSize: 48,
            lineHeight: '1.3'
          }}
        >
          Interaction Design Apprenticeship
        </p>
        <p style={{ fontWeight: 500, fontSize: 22 }}>
          A fully funded work-study program to launch your tech career
        </p>
        <p style={{ fontWeight: 300, fontSize: 22 }}>
          Harbour.Space has partnered with SCG to empower driven talent and
          eliminate the barriers to accessing exceptional education and career
          opportunities through a Masters Fellowship.
        </p>
        <p style={{ fontWeight: 300, fontSize: 22 }}>
          <span style={{ fontWeight: 500 }}>Position: </span>Marketing
          Performance
        </p>
        <ActionButton width={166} height={58}>
          Apply Now
        </ActionButton>
      </Flex>
      <Flex width="50%" direction="column" gap={10} position="relative">
        <Flex gap={8} alignItems="center">
          <img src="public/logo.png" alt="Logo" style={{ width: 80 }} />
          <Flex direction="column">
            <p
              style={{
                fontWeight: 300,
                fontSize: 18,
                color: '#000000',
                opacity: '0.5'
              }}
            >
              Powered by:
            </p>
            <p style={{ fontWeight: 300, fontSize: 27 }}>Zeptolab</p>
          </Flex>
        </Flex>
        <Card>
          <p
            style={{
              color: '#685DC5',
              fontWeight: 500,
              fontSize: 16
            }}
          >
            Application closes in
          </p>
          <p
            style={{
              fontWeight: 300,
              fontSize: 27
            }}
          >
            6 Day : 22 Hrs : 56 Min : 13 Seg{' '}
          </p>
        </Card>
        <Card>
          <Flex direction="column" style={{ width: 'calc(50% - 10px)' }}>
            <Title>Location</Title>
            <SubtitleSmall>Bangkok</SubtitleSmall>
          </Flex>
          <Flex direction="column" style={{ width: 'calc(50% - 10px)' }}>
            <Title>Duration</Title>
            <SubtitleSmall>1 Year Full-Time</SubtitleSmall>
          </Flex>
          <Flex direction="column" style={{ width: 'calc(50% - 10px)' }}>
            <Title>Start date</Title>
            <SubtitleSmall>30 June 2020</SubtitleSmall>
          </Flex>
          <Flex direction="column" style={{ width: 'calc(50% - 10px)' }}>
            <Title>End date</Title>
            <SubtitleSmall>3 Aug 2020</SubtitleSmall>
          </Flex>
        </Card>
      </Flex>
      <BackgroundPattern />
    </Flex>
  )
}

export default HeroSection
