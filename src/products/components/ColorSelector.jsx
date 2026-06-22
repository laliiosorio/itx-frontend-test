export default function ColorSelector({ colors, selectedColor, onChange }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Color</p>

      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.code}
            type="button"
            onClick={() => onChange(color.code)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              selectedColor === color.code
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
            }`}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  )
}
