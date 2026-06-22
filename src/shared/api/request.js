import apiClient from './apiClient'

export async function request(config) {
  try {
    const response = await apiClient(config)

    return response.data
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Something went wrong'

    throw new Error(message, { cause: error })
  }
}
