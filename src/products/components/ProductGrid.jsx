import ProductCard from '@/products/components/ProductCard'

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="rounded-xl border border-outline-variant bg-surface p-8 text-center">
        <p className="text-sm text-on-surface-variant">No products found.</p>
      </div>
    )
  }

  return (
    <div
      className="
    grid
    grid-cols-1
    gap-6
    sm:grid-cols-2
    lg:grid-cols-4
  "
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
