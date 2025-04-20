import { useEffect, useState } from 'react'
import apprenticeshipService from '../services/apprenticeshipService'

export const useApprenticeship = () => {
  const [apprenticeship, setApprenticeship] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApprenticeship = async () => {
      try {
        const data = await apprenticeshipService()
        setApprenticeship(data)
      } catch (error) {
        console.error('Error fetching apprenticeship:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchApprenticeship()
  }, [])

  return { apprenticeship, loading }
}
