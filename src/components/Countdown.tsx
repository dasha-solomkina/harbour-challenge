import { useEffect, useState } from 'react'
import { addMonths, addYears, differenceInSeconds } from 'date-fns'

const Countdown = ({ baseDate }: { baseDate: string }) => {
  // The application_end_date is outdated in the API so I am adding 4 years and 8 months for the countdown to work.
  const currentBaseDate = new Date(baseDate)
  const endDate = addMonths(addYears(currentBaseDate, 4), 8)

  const [remainingSeconds, setRemainingSeconds] = useState(
    differenceInSeconds(endDate, new Date())
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const diff = Math.max(0, differenceInSeconds(endDate, now))
      setRemainingSeconds(diff)
    }, 1000)

    return () => clearInterval(interval)
  }, [endDate])

  const days = Math.floor(remainingSeconds / (3600 * 24))
  const hours = Math.floor((remainingSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((remainingSeconds % 3600) / 60)
  const seconds = remainingSeconds % 60

  return (
    <>
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
          fontSize: 26
        }}
      >
        {days} Day : {hours} Hrs : {minutes} Min : {seconds} Seg
      </p>
    </>
  )
}

export const MiniCountdown = ({ baseDate }: { baseDate: string }) => {
  // The application_end_date is outdated in the API so I am adding 4 years and 8 months for the countdown to work.
  const currentBaseDate = new Date(baseDate)
  const endDate = addMonths(addYears(currentBaseDate, 4), 8)

  const [remainingSeconds, setRemainingSeconds] = useState(
    differenceInSeconds(endDate, new Date())
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const diff = Math.max(0, differenceInSeconds(endDate, now))
      setRemainingSeconds(diff)
    }, 1000)

    return () => clearInterval(interval)
  }, [endDate])

  const days = Math.floor(remainingSeconds / (3600 * 24))
  const minutes = Math.floor((remainingSeconds % 3600) / 60)
  const seconds = remainingSeconds % 60

  return (
    <>
      {days} Day : {minutes} Min : {seconds} Seg
    </>
  )
}

export default Countdown
