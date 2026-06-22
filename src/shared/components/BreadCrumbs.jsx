import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return <span className="text-sm text-gray-500">Products</span>
  }

  return (
    <nav className="text-sm text-gray-500">
      <Link to="/" className="hover:text-black">
        Products
      </Link>

      <span className="mx-2">/</span>

      <span>Details</span>
    </nav>
  )
}
