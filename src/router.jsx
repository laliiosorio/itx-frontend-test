import { createBrowserRouter } from 'react-router-dom'
import App from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <p>HOLI</p>,
      },
      // {
      //     path: 'product/:id',
      //     element: <ProductDetailPage />,
      //   },
    ],
  },
])
