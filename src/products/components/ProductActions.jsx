import { useState } from 'react'
import { useCart } from '@/cart/hooks/useCart'
import ColorSelector from '@/products/components/ColorSelector'
import StorageSelector from '@/products/components/StorageSelector'

export default function ProductActions({ product }) {
  const colors = product.options?.colors ?? []
  const storages = product.options?.storages ?? []

  const [selectedColor, setSelectedColor] = useState(colors[0]?.code)
  const [selectedStorage, setSelectedStorage] = useState(storages[0]?.code)

  const { addProductToCart, isAdding } = useCart()

  function handleAddToCart() {
    addProductToCart({
      id: product.id,
      colorCode: selectedColor,
      storageCode: selectedStorage,
    })
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-6">
        <ColorSelector colors={colors} selectedColor={selectedColor} onChange={setSelectedColor} />

        <StorageSelector
          storages={storages}
          selectedStorage={selectedStorage}
          onChange={setSelectedStorage}
        />

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isAdding || !selectedColor || !selectedStorage}
          className="h-12 w-full rounded-lg bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
