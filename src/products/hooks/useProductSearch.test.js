import { describe, expect, it } from 'vitest'
import { filterProducts } from './useProductSearch'

const products = [
  { id: '1', brand: 'Samsung', model: 'Galaxy S24' },
  { id: '2', brand: 'Apple', model: 'iPhone 15' },
  { id: '3', brand: 'Google', model: 'Pixel 9' },
]

describe('filterProducts', () => {
  it('filters products by brand or model regardless of casing', () => {
    expect(filterProducts(products, 'Samsung')).toEqual([products[0]])
    expect(filterProducts(products, 'samsung')).toEqual([products[0]])
    expect(filterProducts(products, 'Sam')).toEqual([products[0]])
    expect(filterProducts(products, 'Galaxy')).toEqual([products[0]])
  })

  it('returns all products when the search term is empty', () => {
    expect(filterProducts(products, '   ')).toEqual(products)
  })
})
