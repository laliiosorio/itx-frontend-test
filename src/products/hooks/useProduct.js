import { useQuery } from '@tanstack/react-query'
import { getProductById } from '@/products/api/productsApi'

export function useProduct(id) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: Boolean(id),
  })
}
