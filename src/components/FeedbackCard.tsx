import * as Avatar from '@radix-ui/react-avatar'
import { Flex, styled } from '../../styled-system/jsx'
import { css } from '../../styled-system/css'

const linkStyle = css({
  cursor: 'pointer',
  color: '#b3b3b3',
  fontWeight: 700,
  fontSize: 28,

  _hover: {
    color: '#685DC5'
  }
})

export const ActionButton = styled('button', {
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

const FeedbackCard = () => {
  return (
    <Flex
      direction="column"
      border="1px solid #DADADA"
      borderRadius={4}
      width={800}
      p={5}
      gap={10}
      height={400}
      alignItems="center"
      backgroundColor="#FBFBFB"
    >
      <Flex gap={10} pl={5} pt={5} pr={10} alignItems="center" width="100%">
        <Avatar.Root>
          <Avatar.Image
            src="feedback.png"
            alt="Harbour Space student"
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              width: 50,
              height: 50
            }}
          />
          <Avatar.Fallback delayMs={600}>Harbour Space student</Avatar.Fallback>
        </Avatar.Root>
        <Flex direction="column" mr="auto">
          <p style={{ color: '#535353', fontSize: 16, fontWeight: 500 }}>
            Irene Pereyra
          </p>
          <p style={{ color: '#535353', fontSize: 16, fontWeight: 300 }}>
            Interaction Design Fellow ‘19
          </p>
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
        {/* <ActionButton style={{ width: 120, height: 57, alignSelf: 'end' }}>
          Drag
        </ActionButton> */}
        <p style={{ fontSize: 26, fontWeight: 300, color: '#6A6A6A' }}>
          This Fellowship was a turning point in my career. I wouldn’t be where
          I am today without the financial support and experienced offered
          through the program.
        </p>
        <p style={{ fontSize: 16, fontWeight: 300, color: '#535353' }}>
          Education · B.A. Visual Design
        </p>
      </Flex>
    </Flex>
  )
}

export default FeedbackCard
