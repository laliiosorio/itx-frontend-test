import { QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from '@/cart/context/CartProvider'
import {
  createQueryClient,
  persistQueryCache,
  restoreQueryCache,
} from '@/shared/utils/queryCachePersistence'

const queryClient = createQueryClient()

restoreQueryCache({ client: queryClient })

queryClient.getQueryCache().subscribe((event) => {
  if (event?.query?.state.status === 'success') {
    persistQueryCache({ client: queryClient })
  }
})

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  )
}
