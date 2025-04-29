import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import AboutSection from './AboutSection'
import useApprenticeshipStore from '../../hooks/useApprenticeshipStore'

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

describe('AboutSection component', () => {
  it('renders correct about text', () => {
    const apprenticeship = {
      about_text:
        'This apprenticeship is a great opportunity to kickstart your tech career!'
    }
    useApprenticeshipStore.mockReturnValue({
      apprenticeship: mockApprenticeship
    })

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
