import { useMemo, useState } from 'react'

export function filterProducts(products, searchTerm) {
  const normalizedSearch = searchTerm.trim().toLowerCase()

  if (!normalizedSearch) return products

  return products.filter((product) => {
    const brand = product.brand?.toLowerCase() ?? ''
    const model = product.model?.toLowerCase() ?? ''

    return brand.includes(normalizedSearch) || model.includes(normalizedSearch)
  })
}

export function useProductSearch(products) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    return filterProducts(products, searchTerm)
  }, [products, searchTerm])

  return {
    searchTerm,
    setSearchTerm,
    filteredProducts,
  }
}
