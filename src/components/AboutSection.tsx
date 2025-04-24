import { Flex } from '../../styled-system/jsx'
import * as Avatar from '@radix-ui/react-avatar'
import { SectionTitle } from './HeroSection'

const AboutSection = () => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      px={60}
      pt={20}
      id="about-section"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Flex
        justify="center"
        align="center"
        position="relative"
        width={440}
        height={440}
        borderRadius="full"
        backgroundImage="url('pattern.png')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Avatar.Root>
          <Avatar.Image
            src="default.png"
            alt="Harbour Space student"
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              width: 380,
              height: 380
            }}
          />
          <Avatar.Fallback delayMs={600}>Harbour Space student</Avatar.Fallback>
        </Avatar.Root>
      </Flex>
      <Flex
        width={480}
        direction="column"
        gap={10}
        mt={10}
        fontWeight={300}
        fontSize={22}
        lineHeight="1.5"
      >
        <SectionTitle>About the apprenticeship</SectionTitle>
        <p>
          Our scholarships are designed to give talented and driven young people
          from any background access to top-class education, experience and
          network. We offer a fully-funded master’s degree alongside an
          apprenticeship and a guaranteed job upon graduation.{' '}
        </p>
      </Flex>
    </Flex>
  )
}

export default AboutSection
