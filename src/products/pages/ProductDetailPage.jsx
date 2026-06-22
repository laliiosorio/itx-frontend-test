import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ProductActions from '@/products/components/ProductActions'
import ProductDescription from '@/products/components/ProductDescription'
import ProductImage from '@/products/components/ProductImage'
import { useProduct } from '@/products/hooks/useProduct'
import ErrorMessage from '@/shared/components/ErrorMessage'
import LoadingSpinner from '@/shared/components/LoadingSpinner'

export default function ProductDetailPage() {
  const { id } = useParams()
  const { data: product, isLoading, isError, error } = useProduct(id)

  if (isLoading) return <LoadingSpinner />

  if (isError) {
    return <ErrorMessage message={error?.message || 'Error loading product'} />
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
      >
        <ArrowLeft size={16} />
        Back to products
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductImage product={product} />

        <div className="space-y-8">
          <ProductDescription product={product} />

          <ProductActions product={product} />
        </div>
      </div>
    </section>
  )
}
