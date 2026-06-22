import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return <span className="text-sm text-gray-500 cursor-default">Móviles</span>
  }

  return (
    <nav className="hidden md:flex items-center gap-sm mr-lg">
      <Link className="hover:text-blue-600 transition-colors" to="/">
        Móviles
      </Link>
      <ChevronRight className="text-gray-300 text-sm" />
      <Link className="hover:text-blue-600 transition-colors" to="/">
        Detalles
      </Link>
    </nav>
  )
}
