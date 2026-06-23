import { ShoppingCart } from 'lucide-react'

import { useCart } from '@/cart/hooks/useCart'

export default function CartCounter() {
  const { cartCount } = useCart()

  return (
    <div className="relative flex items-center text-slate-900">
      <ShoppingCart size={20} />

      <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
        {cartCount}
      </span>
    </div>
  )
}
