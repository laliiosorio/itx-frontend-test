export default function ProductImage({ product }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex aspect-square items-center justify-center rounded-xl bg-slate-100 p-8">
        <img
          src={product.imgUrl}
          alt={`${product.brand} ${product.model}`}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}
