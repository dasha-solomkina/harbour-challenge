import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useApprenticeship } from './useApprenticeship'
import apprenticeshipService from '../services/apprenticeshipService'
import useApprenticeshipStore from './useApprenticeshipStore'

vi.mock('../services/apprenticeshipService')
vi.mock('./useApprenticeshipStore')

describe('useApprenticeship hook', () => {
  const mockSetApprenticeship = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useApprenticeshipStore).mockImplementation(() => ({
      apprenticeship: undefined,
      setApprenticeship: mockSetApprenticeship
    }))
  })

  it('fetches data and sets apprenticeship', async () => {
    const mockData = {
      scholarship: {
        name: 'Test Scholarship',
        description: [{ data: 'Test description' }],
        position: 'Software Engineer',
        location: { name: 'Remote' },
        scholarship_start_date: '2024-01-01',
        application_end_date: '2023-12-01',
        duration: 12,
        company: {
          name: 'Test Company',
          logo_dark: { src: 'logo.png' }
        },
        about: [{ data: 'About the program' }],
        tuition: 10000,
        total_value: 50000,
        stipend_per_month: 2000,
        stipend_per_year: 24000,
        remaining: 5,
        study_commitment: 20,
        study_commitment_text: '20 hours per week',
        internship_commitment: 30,
        internship_commitment_text: '30 hours per week',
        faqs: { items: [] }
      }
    }

    vi.mocked(apprenticeshipService).mockImplementation(() =>
      Promise.resolve(mockData)
    )

    const { result } = renderHook(() => useApprenticeship())

    expect(result.current.loading).toBe(true)

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(result.current.loading).toBe(false)
  })

  it('handles error when fetching data', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    vi.mocked(apprenticeshipService).mockRejectedValue(new Error('API Error'))

    const { result } = renderHook(() => useApprenticeship())

    expect(result.current.loading).toBe(true)

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(result.current.loading).toBe(false)
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error fetching apprenticeship:',
      expect.any(Error)
    )
    expect(mockSetApprenticeship).not.toHaveBeenCalled()

    consoleSpy.mockRestore()
  })
})
