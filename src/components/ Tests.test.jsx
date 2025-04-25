import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import useApprenticeshipStore from '../hooks/useApprenticeshipStore'
import Header from './Header'
import HeroSection from './HeroSection'
import StickyBar from './StickyBar'
import AboutSection from './AboutSection'
import FeedbackCard from './FeedbackCard'
import FAQ from './FAQ'

// Mock the useApprenticeshipStore hook
vi.mock('../hooks/useApprenticeshipStore', () => ({
  default: vi.fn()
}))

// Mock data for the store
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

// Since it is a small project all test are added to the same file

describe('Header component', () => {
  it('renders correct heading', () => {
    // Mock the store return value
    useApprenticeshipStore.mockReturnValue({
      apprenticeship: mockApprenticeship
    })

    render(<Header />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'HARBOUR.SPACE'
    )
  })
})

describe('HeroSection component', () => {
  it('renders correct apprenticeship name', () => {
    // Mock the store return value
    useApprenticeshipStore.mockReturnValue({
      apprenticeship: mockApprenticeship
    })

    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Test Apprenticeship'
    )
  })
})

describe('StickyBar component', () => {
  it('renders correct internship details', () => {
    // Mock the store return value
    useApprenticeshipStore.mockReturnValue({
      apprenticeship: mockApprenticeship
    })

    render(<StickyBar />)

    expect(screen.getByText('Start date')).toBeInTheDocument()
    expect(screen.getByText('Application deadline')).toBeInTheDocument()
    expect(screen.getByText('Application closes in')).toBeInTheDocument()
    expect(screen.getByText('1 Year Full-Time')).toBeInTheDocument()
  })
})

describe('AboutSection component', () => {
  it('renders correct about text', () => {
    const apprenticeship = {
      about_text:
        'This apprenticeship is a great opportunity to kickstart your tech career!'
    }

    render(<AboutSection apprenticeship={apprenticeship} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'About the apprenticeship'
    )
    expect(
      screen.getByText(
        'This apprenticeship is a great opportunity to kickstart your tech career!'
      )
    ).toBeInTheDocument()
  })
})

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

test('renders FAQ section with titles', () => {
  render(<FAQ />)
  expect(screen.getByText(/Frequently asked questions/i)).toBeInTheDocument()
  expect(screen.getByText(/Filter by:/i)).toBeInTheDocument()
})
