export function formatPrice(price) {
  if (!price) return 'Precio no disponible'

  return `${price} €`
}
