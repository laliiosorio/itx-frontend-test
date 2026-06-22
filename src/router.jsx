import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ProductDetailPage from './products/pages/ProductDetailPage'
import ProductListPage from './products/pages/ProductListPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductListPage />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailPage />,
      },
    ],
  },
])
