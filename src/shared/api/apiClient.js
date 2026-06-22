import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://itx-frontend-test.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default apiClient
