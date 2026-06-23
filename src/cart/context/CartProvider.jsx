import { useState } from 'react'

import { addToCart } from '@/cart/api/cartApi'
import { CartContext } from '@/cart/context/cart-context'
import { getStoredCartCount, setStoredCartCount } from '@/shared/utils/cartStorage'

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(() => getStoredCartCount())
  const [isAdding, setIsAdding] = useState(false)

  async function addProductToCart({ id, colorCode, storageCode }) {
    try {
      setIsAdding(true)

      const response = await addToCart({
        id,
        colorCode,
        storageCode,
      })

      const addedCount = Number(response.count ?? 1)

      setCartCount((currentCount) => {
        const nextCount = currentCount + (Number.isFinite(addedCount) ? addedCount : 1)

        setStoredCartCount(nextCount)

        return nextCount
      })

      return response
    } finally {
      setIsAdding(false)
    }
  }

  const value = {
    cartCount,
    isAdding,
    addProductToCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
