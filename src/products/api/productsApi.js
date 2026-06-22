import { request } from '@/shared/api/request'

export function getProducts() {
  return request({
    method: 'GET',
    url: '/api/product',
  })
}

export function getProductById(id) {
  return request({
    method: 'GET',
    url: `/api/product/${id}`,
  })
}
