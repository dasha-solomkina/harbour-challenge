import { useEffect, useState } from 'react'
import apprenticeshipService from '../services/apprenticeshipService'
import useApprenticeshipStore from './useApprenticeshipStore'

export const useApprenticeship = () => {
  const [loading, setLoading] = useState(true)
  const setApprenticeship = useApprenticeshipStore(
    (state) => state.setApprenticeship
  )

  useEffect(() => {
    const fetchApprenticeship = async () => {
      try {
        const data = await apprenticeshipService()
        const mappedData = {
          name: data.scholarship.name,
          description: data.scholarship.description[0].data,
          position: data.scholarship.position,
          location: data.scholarship.location.name,
          scholarship_start_date: data.scholarship.scholarship_start_date,
          application_end_date: data.scholarship.application_end_date,
          duration: data.scholarship.duration,
          company_name: data.scholarship.company.name,
          company_logo: data.scholarship.company.logo_dark.src,
          about_text: data.scholarship.about[0].data,
          tuition: data.scholarship.tuition,
          total_value: data.scholarship.total_value,
          stipend_per_month: data.scholarship.stipend_per_month,
          stipend_per_year: data.scholarship.stipend_per_year,
          remaining: data.scholarship.remaining,
          study_commitment: data.scholarship.study_commitment,
          study_commitment_text: data.scholarship.study_commitment_text,
          internship_commitment: data.scholarship.internship_commitment,
          internship_commitment_text:
            data.scholarship.internship_commitment_text,
          faq: data.scholarship.faqs.items
        }

        setApprenticeship(mappedData)
      } catch (error) {
        console.error('Error fetching apprenticeship:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchApprenticeship()
  }, [setApprenticeship])

  return { loading }
}
