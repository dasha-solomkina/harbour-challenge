import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import useApprenticeshipStore from '../../hooks/useApprenticeshipStore'
import FeedbackCard from './FeedbackCard'

//
// Since it is a small project all test have been added to the same file.

// Mock the useApprenticeshipStore hook
vi.mock('../../hooks/useApprenticeshipStore', () => ({
  default: vi.fn()
}))

const mockApprenticeship = {
  name: 'Test Apprenticeship',
  description: 'Test Description',
  company_name: 'Test Company',
  company_logo: 'test-logo.png',
  scholarship_start_date: '2024-01-01',
  application_end_date: '2024-12-31',
  location: 'Test Location',
  duration: 1,
  about_text:
    'This apprenticeship is a great opportunity to kickstart your tech career!'
}

describe('FeedbackCard Component', () => {
  it('should render the avatar image, name, and feedback', () => {
    render(<FeedbackCard />)

    expect(screen.getByText(/Irene Pereyra/i)).toBeInTheDocument()
    const feedbackText = screen.getByText(
      /This Fellowship was a turning point in my career./i
    )
    expect(feedbackText).toBeInTheDocument()
  })

  it('should render a link to LinkedIn', () => {
    render(<FeedbackCard />)
    const link = screen.getByRole('link', { name: /in/i })
    expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/school/harbour-space/'
    )
  })
})
