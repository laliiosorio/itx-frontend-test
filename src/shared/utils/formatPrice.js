export function formatPrice(price) {
  if (!price) return 'Price unavailable'

  return `${price} €`
}
