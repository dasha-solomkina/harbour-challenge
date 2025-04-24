import axios from 'axios'

// const API_URL =
// 'https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab?_gl=1*qhvt3v*_gcl_au*MzA2NTE1NTQwLjE3NDMzNjQyNzQ.'

const apprenticeshipService = async () => {
  const response = await axios.get(
    'https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab?_gl=1*qhvt3v*_gcl_au*MzA2NTE1NTQwLjE3NDMzNjQyNzQ.',
  )
  return response.data
}

export default apprenticeshipService
