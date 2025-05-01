import { Flex } from '../../../styled-system/jsx'
import * as Avatar from '@radix-ui/react-avatar'
import { SectionTitle } from '../hero/HeroSection'
import useApprenticeshipStore from '../../hooks/useApprenticeshipStore'
import { css } from '../../../styled-system/css'

const imgStyles = css({
  width: { base: 280, lg: 380 },
  height: { base: 280, lg: 380 }
})

const AboutSection = () => {
  const { apprenticeship } = useApprenticeshipStore()

  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      px={{ base: 10, lg: 40 }}
      pt={{ base: 10, lg: 20 }}
      id="about-section"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Flex
        justify="center"
        align="center"
        position="relative"
        width={{ base: 300, lg: 440 }}
        height={{ base: 300, lg: 440 }}
        borderRadius="full"
        backgroundImage="url('pattern.png')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Avatar.Root>
          <Avatar.Image
            src="default.png"
            alt="Harbour Space student"
            className={imgStyles}
            style={{
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <Avatar.Fallback delayMs={600}>Harbour Space student</Avatar.Fallback>
        </Avatar.Root>
      </Flex>
      <Flex
        width={{ base: '100%', lg: 480 }}
        direction="column"
        gap={6}
        mt={10}
        fontWeight={300}
        fontSize={22}
        lineHeight="1.5"
      >
        <SectionTitle>About the apprenticeship</SectionTitle>
        <p>{apprenticeship?.about_text}</p>
      </Flex>
    </Flex>
  )
}

export default AboutSection
