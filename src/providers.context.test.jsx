/* @vitest-environment jsdom */
import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

function createStorage() {
  const state = {}

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

describe('Providers', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.stubGlobal('localStorage', createStorage())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('makes cart and query client contexts available to children', async () => {
    const [{ default: Providers }, { useCart }, { useQueryClient }] = await Promise.all([
      import('./providers'),
      import('@/cart/hooks/useCart'),
      import('@tanstack/react-query'),
    ])

    function ContextConsumer() {
      const { cartCount } = useCart()
      const queryClient = useQueryClient()

      return (
        <div>
          <span>Cart count: {cartCount}</span>
          <span>{queryClient ? 'Query client ready' : 'Query client missing'}</span>
        </div>
      )
    }

    render(
      <Providers>
        <ContextConsumer />
      </Providers>,
    )

    expect(screen.getByText('Cart count: 0')).toBeTruthy()
    expect(screen.getByText('Query client ready')).toBeTruthy()
  })
})
