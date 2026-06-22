import { Outlet } from 'react-router-dom'
import Header from './shared/components/Header'

export default function App() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 md:mt-16">
        <Outlet />
      </main>
    </>
  )
}
