import { useMemo, useState } from 'react'
import ProductGrid from '@/products/components/ProductGrid'
import ProductSearch from '@/products/components/ProductSearch'
import { useProducts } from '@/products/hooks/useProducts'
import ErrorMessage from '@/shared/components/ErrorMessage'
import LoadingSpinner from '@/shared/components/LoadingSpinner'

export default function ProductListPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data: products = [], isLoading, isError, error } = useProducts()

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    if (!normalizedSearch) return products

    return products.filter((product) => {
      const brand = product.brand?.toLowerCase() ?? ''
      const model = product.model?.toLowerCase() ?? ''

      return brand.includes(normalizedSearch) || model.includes(normalizedSearch)
    })
  }, [products, searchTerm])

  if (isLoading) return <LoadingSpinner />

  if (isError) {
    return <ErrorMessage message={error?.message || 'Error loading products'} />
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Mobile Phones</h1>

          <p className="mt-2 text-sm text-slate-500">Discover our premium range of devices.</p>
        </div>

        <ProductSearch value={searchTerm} onChange={setSearchTerm} />
      </div>

      <ProductGrid products={filteredProducts} />
    </section>
  )
}
