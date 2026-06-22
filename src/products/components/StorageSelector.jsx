export default function StorageSelector({ storages, selectedStorage, onChange }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Storage</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {storages.map((storage) => (
          <button
            key={storage.code}
            type="button"
            onClick={() => onChange(storage.code)}
            className={`rounded-lg border px-4 py-3 text-sm font-semibold transition ${
              selectedStorage === storage.code
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
            }`}
          >
            {storage.name}
          </button>
        ))}
      </div>
    </div>
  )
}
