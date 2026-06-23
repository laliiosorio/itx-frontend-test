import { QueryClient, dehydrate, hydrate } from '@tanstack/react-query'

export const QUERY_CACHE_KEY = 'itx-query-cache'
export const ONE_HOUR = 1000 * 60 * 60

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: ONE_HOUR,
        gcTime: ONE_HOUR,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  })
}

function getBrowserStorage() {
  if (typeof localStorage === 'undefined' || typeof localStorage.getItem !== 'function') return null

  return localStorage
}

export function restoreQueryCache({ client, storage = getBrowserStorage(), now = Date.now() }) {
  if (!storage) return

  const persistedCache = storage.getItem(QUERY_CACHE_KEY)
  if (!persistedCache) return

  try {
    const { timestamp, clientState } = JSON.parse(persistedCache)

    if (now - timestamp > ONE_HOUR) {
      storage.removeItem(QUERY_CACHE_KEY)
      return
    }

    hydrate(client, clientState)
  } catch {
    storage.removeItem(QUERY_CACHE_KEY)
  }
}

export function persistQueryCache({ client, storage = getBrowserStorage(), now = Date.now() }) {
  if (!storage) return

  storage.setItem(
    QUERY_CACHE_KEY,
    JSON.stringify({
      timestamp: now,
      clientState: dehydrate(client),
    }),
  )
}
