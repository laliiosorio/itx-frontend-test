const CART_COUNT_KEY = 'cart-count'

export function getStoredCartCount() {
  if (typeof localStorage === 'undefined') {
    return 0
  }

  const value = localStorage.getItem(CART_COUNT_KEY)
  const count = Number(value)

  return Number.isFinite(count) ? count : 0
}

export function setStoredCartCount(count) {
  if (typeof localStorage === 'undefined') {
    return
  }

  localStorage.setItem(CART_COUNT_KEY, String(count))
}
