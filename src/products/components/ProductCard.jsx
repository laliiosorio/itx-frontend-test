import { Link } from 'react-router-dom'
import { formatPrice } from '@/shared/utils/formatPrice'

export default function ProductCard({ product }) {
  const { id, brand, model, price, imgUrl } = product

  return (
    <Link
      to={`/product/${id}`}
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div
        className="
          flex
          aspect-square
          items-center
          justify-center
          bg-slate-50
          p-6
        "
      >
        <img
          src={imgUrl}
          alt={`${brand} ${model}`}
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      <div className="space-y-2 p-4">
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-wider
            text-slate-400
          "
        >
          {brand}
        </p>

        <h2
          className="
            line-clamp-2
            text-sm
            font-semibold
            text-slate-900
          "
        >
          {model}
        </h2>

        <p
          className="
            text-base
            font-bold
            text-blue-600
          "
        >
          {formatPrice(price)}
        </p>
      </div>
    </Link>
  )
}
