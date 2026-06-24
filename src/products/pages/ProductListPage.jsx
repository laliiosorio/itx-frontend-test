import ProductGrid from '@/products/components/ProductGrid'
import ProductSearch from '@/products/components/ProductSearch'
import { useProductSearch } from '@/products/hooks/useProductSearch'
import { useProducts } from '@/products/hooks/useProducts'
import ErrorMessage from '@/shared/components/ErrorMessage'
import LoadingSpinner from '@/shared/components/LoadingSpinner'

export default function ProductListPage() {
  const { data: products = [], isLoading, isError, error } = useProducts()
  const { searchTerm, setSearchTerm, filteredProducts } = useProductSearch(products)

  if (isLoading) return <LoadingSpinner />

  if (isError) {
    return <ErrorMessage message={error?.message || 'Error al cargar los productos'} />
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-4 pb-8 md:py-8">
      <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Teléfonos móviles</h1>

          <p className="mt-2 text-sm text-slate-500">
            Descubre nuestra selección premium de dispositivos.
          </p>
        </div>

        <ProductSearch value={searchTerm} onChange={setSearchTerm} />
      </div>

      <ProductGrid products={filteredProducts} />
    </section>
  )
}
