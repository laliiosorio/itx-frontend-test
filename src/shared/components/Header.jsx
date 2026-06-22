import { Smartphone, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Breadcrumbs from './BreadCrumbs'

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-md border-transparent border-b-2 border-b-gray-100 flex justify-center items-center h-16 px-4 md:px-8">
        <div className="max-w-7xl w-full flex justify-between items-center h-16 px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 font-black text-lg">
            <Smartphone />
            CELUKOS
          </Link>
          <section className="flex items-center ">
            <section className="hidden md:flex items-center gap-2 mr-4">
              <Breadcrumbs />
            </section>

            {/* TODO ESTO SERA CARTCOUNTER */}
            <button className=" text-blue-600 relative p-2 hover:opacity-80 active:scale-95 transition-transform duration-150">
              <span className="">
                <ShoppingCart />
              </span>
              <span
                className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold cursor-pointer"
                id="cart-count"
              >
                2
              </span>
            </button>
          </section>
        </div>
      </header>

      <section className="md:hidden items-center gap-2 mr-4 mt-16 p-4">
        <Breadcrumbs />
      </section>
    </>
  )
}
