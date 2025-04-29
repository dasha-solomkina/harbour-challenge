import { css, cx } from '../../styled-system/css'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const AnimatedAccordionButton = ({ isOpen }: { isOpen: boolean }) => {
  const controls = useAnimation()

  const size = 48
  const strokeWidth = 2
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    controls.start(isOpen ? 'clicked' : 'initial')
  }, [isOpen, controls])

  return (
    <motion.div
      className={cx(
        css({
          width: `${size}px`,
          height: `${size}px`,
          position: 'relative',
          borderRadius: 999,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        })
      )}
    >
      <div
        className={css({
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#685DC5',
          zIndex: 0
        })}
      />

      <motion.div
        className={css({
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: 999,
          backgroundColor: 'white',
          zIndex: 1
        })}
        initial={{ scale: 1 }}
        animate={controls}
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1 },
          clicked: {
            scale: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
          }
        }}
      />

      <svg
        width={size}
        height={size}
        className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'rotate(-90deg)',
          zIndex: 2
        })}
      >
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#685DC5"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={controls}
          variants={{
            initial: {
              strokeDashoffset: circumference
            },
            clicked: {
              strokeDashoffset: 0
            }
          }}
        />
      </svg>

      <motion.span
        className={css({
          fontWeight: 300,
          fontSize: 24,
          zIndex: 3,
          color: isOpen ? 'white' : '#685DC5',
          pb: '4px'
        })}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isOpen ? '−' : '+'}
      </motion.span>
    </motion.div>
  )
}

export default AnimatedAccordionButton
