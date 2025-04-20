import { useRef } from 'react'
import { css } from '../../styled-system/css'
import { Flex, styled } from '../../styled-system/jsx'
import FeedbackCard from './FeedbackCard'

const containerStyle = css({
  position: 'relative',
  overflowX: 'auto',
  display: 'flex',
  gap: 16,
  scrollSnapType: 'x mandatory',
  scrollBehavior: 'smooth',
  WebkitOverflowScrolling: 'touch',
  px: 4,
  scrollbarWidth: 'none',
  paddingBottom: 20
})

const cardWrapperStyle = css({
  flex: '0 0 auto',
  scrollSnapAlign: 'start',
  zIndex: 1
})

const BackgroundPattern = styled(Flex, {
  base: {
    position: 'absolute',
    top: '-25%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 1120,
    height: 394,
    zIndex: 0,
    backgroundImage: "url('public/background.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})

const FeedbackSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <Flex position="relative" overflow="visible">
      <BackgroundPattern />
      <Flex ref={scrollRef} className={containerStyle}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={cardWrapperStyle}>
            <FeedbackCard />
          </div>
        ))}
      </Flex>
    </Flex>
  )
}

export default FeedbackSlider
