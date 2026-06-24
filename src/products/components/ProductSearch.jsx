import { Search } from 'lucide-react'

export default function ProductSearch({ value, onChange }) {
  return (
    <div className="relative w-full md:w-80">
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar por marca o modelo..."
        className="
          h-11
          w-full
          rounded-lg
          border
          border-slate-200
          bg-white
          pl-10
          pr-4
          text-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-100
        "
      />
    </div>
  )
}
