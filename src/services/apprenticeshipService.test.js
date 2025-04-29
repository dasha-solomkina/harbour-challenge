import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import apprenticeshipService from './apprenticeshipService'

vi.mock('axios')

describe('apprenticeshipService', () => {
  it('fetches apprenticeship data successfully', async () => {
    const mockResponse = {
      data: {
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
    }

    axios.get.mockResolvedValue(mockResponse)

    const result = await apprenticeshipService()

    expect(result).toEqual(mockResponse.data)
    expect(result.name).toBe('Test Apprenticeship')
    expect(result.company_name).toBe('Test Company')
    expect(result.about_text).toBe(
      'This apprenticeship is a great opportunity to kickstart your tech career!'
    )
  })

  it('handles API errors correctly', async () => {
    axios.get.mockRejectedValue(new Error('Network error'))

    await expect(apprenticeshipService()).rejects.toThrow('Network error')
  })
})
