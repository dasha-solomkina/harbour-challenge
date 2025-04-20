import { createWithEqualityFn } from 'zustand/traditional'

interface FAQ {
  question: string
  answer: {
    type: string
    data: string
  }[]
}

export interface ApprenticeshipDetails {
  name: string
  description: string
  position: string
  location: string
  scholarship_start_date: string
  application_end_date: string
  duration: string
  company_name: string

  about_text: string
  tuition: number
  total_value: number
  stipend_per_month: number
  stipend_per_year: number
  remaining: number
  study_commitment: number
  study_commitment_text: string
  internship_commitment: number
  internship_commitment_text: string

  faq: FAQ[]
}

interface ApprenticeshipStore {
  apprenticeship: ApprenticeshipDetails | undefined
  setApprenticeship: (data: ApprenticeshipDetails) => void
}

const useApprenticeshipStore = createWithEqualityFn<ApprenticeshipStore>(
  (set) => ({
    apprenticeship: undefined,
    setApprenticeship: (data) => set({ apprenticeship: data }),
  }),
)
export default useApprenticeshipStore
