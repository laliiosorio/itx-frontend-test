import { Link } from 'react-router-dom'
import Breadcrumbs from './BreadCrumbs'
import CartCounter from '@/cart/components/CartCounter'

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-md border-transparent border-b-2 border-b-gray-100 h-16">
        <div className="mx-auto max-w-7xl w-full flex justify-between items-center h-16 px-4">
          <Link to="/" className="flex items-center gap-2 font-black text-lg">
            <img src="/favicon.svg" alt="CELUKOS" className="size-7" />
            CELUKOS
          </Link>

          <section className="flex items-center">
            <section className="hidden md:flex items-center gap-2 mr-8">
              <Breadcrumbs />
            </section>

            <CartCounter />
          </section>
        </div>
      </header>

      <section className="md:hidden mx-auto max-w-7xl items-center gap-2 mt-16 px-4 pt-3 pb-1">
        <Breadcrumbs />
      </section>
    </>
  )
}
