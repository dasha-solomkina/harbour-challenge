import { useRef } from 'react'
import { css } from '../../../styled-system/css'
import { Flex, styled } from '../../../styled-system/jsx'
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
  paddingBottom: 20,
  cursor: 'grab',
  '&:active': {
    cursor: 'grabbing'
  },
  userSelect: 'none'
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
    backgroundImage: "url('/background.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})

const FeedbackSlider = ({ isDesktop }: { isDesktop: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0)
    scrollLeft.current = scrollRef.current?.scrollLeft || 0
  }

  const handleMouseLeave = () => {
    isDown.current = false
  }

  const handleMouseUp = () => {
    isDown.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <Flex position="relative" overflow="visible">
      {isDesktop && <BackgroundPattern />}
      <Flex
        ref={scrollRef}
        className={containerStyle}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
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
