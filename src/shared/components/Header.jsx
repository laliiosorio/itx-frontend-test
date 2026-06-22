import { Link } from 'react-router-dom'
import Breadcrumbs from './BreadCrumbs'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold tracking-wide uppercase">
          Mobile Store
        </Link>

        {/* <CartCounter /> */}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-2">
        <Breadcrumbs />
      </div>
    </header>
  )
}
