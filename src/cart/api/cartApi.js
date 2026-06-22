import { request } from '@/shared/api/request'

export function addToCart(payload) {
  return request({
    method: 'POST',
    url: '/api/cart',
    data: payload,
  })
}
