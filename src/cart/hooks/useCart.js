import { useMutation } from '@tanstack/react-query'
import { addToCart } from '@/cart/api/cartApi'

export function useCart() {
  const { mutate, isPending } = useMutation({
    mutationFn: addToCart,
  })

  return {
    addProductToCart: mutate,
    isAdding: isPending,
  }
}
