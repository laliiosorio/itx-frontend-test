import { describe, expect, it } from 'vitest'
import {
  ONE_HOUR,
  QUERY_CACHE_KEY,
  createQueryClient,
  persistQueryCache,
  restoreQueryCache,
} from './shared/utils/queryCachePersistence'

function createStorage(initialState = {}) {
  const state = { ...initialState }

  return {
    getItem: (key) => state[key] ?? null,
    removeItem: (key) => {
      delete state[key]
    },
    setItem: (key, value) => {
      state[key] = value
    },
  }
}

describe('query cache persistence', () => {
  it('stores and restores query data from client storage', () => {
    const storage = createStorage()
    const originalClient = createQueryClient()
    const products = [{ id: '1', brand: 'Apple', model: 'iPhone 15' }]

    originalClient.setQueryData(['products'], products)

    persistQueryCache({ client: originalClient, storage, now: 1000 })

    const restoredClient = createQueryClient()

    restoreQueryCache({ client: restoredClient, storage, now: 1000 + ONE_HOUR - 1 })

    expect(restoredClient.getQueryData(['products'])).toEqual(products)
  })

  it('removes persisted cache when it is older than one hour', () => {
    const storage = createStorage()
    const originalClient = createQueryClient()

    originalClient.setQueryData(['products'], [{ id: '1' }])
    persistQueryCache({ client: originalClient, storage, now: 1000 })

    const restoredClient = createQueryClient()

    restoreQueryCache({ client: restoredClient, storage, now: 1000 + ONE_HOUR + 1 })

    expect(restoredClient.getQueryData(['products'])).toBeUndefined()
    expect(storage.getItem(QUERY_CACHE_KEY)).toBeNull()
  })
})
