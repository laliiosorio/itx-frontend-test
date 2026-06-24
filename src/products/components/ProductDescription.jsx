import { formatPrice } from '@/shared/utils/formatPrice'

const specs = [
  ['Marca', 'brand'],
  ['Modelo', 'model'],
  ['CPU', 'cpu'],
  ['RAM', 'ram'],
  ['OS', 'os'],
  ['Resolución de pantalla', 'displaySize'],
  ['Batería', 'battery'],
  ['Dimensiones', 'dimentions'],
  ['Peso', 'weight'],
]

function getProductCameras(product) {
  return [product.primaryCamera, product.secondaryCamera, product.secondaryCmera]
    .flatMap((camera) => (Array.isArray(camera) ? camera : [camera]))
    .filter(Boolean)
}

export default function ProductDescription({ product }) {
  const cameras = getProductCameras(product)

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
        {product.brand}
      </p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">{product.model}</h1>

      <p className="mt-3 text-2xl font-bold text-blue-600">{formatPrice(product.price)}</p>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Especificaciones técnicas</h2>

        <dl className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {specs.map(([label, key]) => (
            <div key={key} className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
              <dt className="text-slate-500">{label}</dt>
              <dd className="text-right font-medium text-slate-900">
                {product[key] || 'No disponible'}
              </dd>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
            <dt className="text-slate-500">Cámaras</dt>
            <dd className="text-right font-medium text-slate-900">
              {cameras.length ? (
                <ul className="space-y-1">
                  {cameras.map((camera, index) => (
                    <li key={`${camera}-${index}`}>{camera}</li>
                  ))}
                </ul>
              ) : (
                'No disponible'
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
