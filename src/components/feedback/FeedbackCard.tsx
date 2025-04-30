import * as Avatar from '@radix-ui/react-avatar'
import { Flex } from '../../../styled-system/jsx'
import { css } from '../../../styled-system/css'

const linkStyle = css({
  cursor: 'pointer',
  color: '#b3b3b3',
  fontWeight: 700,
  fontSize: 28,

  _hover: {
    color: '#685DC5'
  }
})

const imgStyles = css({
  width: { base: '50px', lg: 50 },
  height: { base: '50px', lg: 50 }
})

const FeedbackCard = () => {
  return (
    <Flex
      direction="column"
      border="1px solid #DADADA"
      borderRadius={4}
      width={{ base: '90vw', md: 800 }}
      p={{ base: 3, md: 5 }}
      gap={10}
      height={{ base: 'auto', md: 400 }}
      alignItems="center"
      backgroundColor="#FBFBFB"
      fontWeight={300}
      fontSize={{ base: 14, md: 16 }}
      color="#535353"
    >
      <Flex
        gap={{ base: 4, md: 10 }}
        pl={{ base: 3, md: 5 }}
        pt={{ base: 3, md: 5 }}
        pr={{ base: 3, md: 10 }}
        alignItems="center"
        width="100%"
      >
        <Avatar.Root>
          <Avatar.Image
            src="feedback.png"
            alt="Harbour Space student"
            className={imgStyles}
            style={{
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <Avatar.Fallback delayMs={600}>Harbour Space student</Avatar.Fallback>
        </Avatar.Root>
        <Flex direction="column" mr="auto">
          <p style={{ fontWeight: 500 }}>Irene Pereyra</p>
          <p>Interaction Design Fellow ‘19</p>
        </Flex>
        <a
          href="https://www.linkedin.com/school/harbour-space/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
        >
          in
        </a>
      </Flex>
      <Flex direction="column" width="80%" gap={10}>
        <p style={{ fontSize: 26, color: '#6A6A6A' }}>
          This Fellowship was a turning point in my career. I wouldn’t be where
          I am today without the financial support and experienced offered
          through the program.
        </p>
        <p>Education · B.A. Visual Design</p>
      </Flex>
    </Flex>
  )
}

export default FeedbackCard
