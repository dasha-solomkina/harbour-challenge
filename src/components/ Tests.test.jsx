import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import useApprenticeshipStore from '../hooks/useApprenticeshipStore'
import Header from './Header'
import StickyBar from './StickyBar'
import FAQ from './faq'

// Since it is a small project some tests have been added to the same file.

vi.mock('../hooks/useApprenticeshipStore', () => ({
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

describe('Header component', () => {
  it('renders correct heading', () => {
    useApprenticeshipStore.mockReturnValue({
      apprenticeship: mockApprenticeship
    })

    render(<Header />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'HARBOUR.SPACE'
    )
  })
})

describe('StickyBar component', () => {
  it('renders correct internship details', () => {
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

test('renders FAQ section with titles', () => {
  render(<FAQ />)
  expect(screen.getByText(/Frequently asked questions/i)).toBeInTheDocument()
  expect(screen.getByText(/Filter by:/i)).toBeInTheDocument()
})
