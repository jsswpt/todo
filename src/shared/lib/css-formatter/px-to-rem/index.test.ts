import { describe, expect, test } from 'vitest'

import { pxToRem } from '.'

describe('Test if pxToRem works correctly', () => {
  test('If passed value is positive number return result', () => {
    expect(pxToRem(32)).toBe('2rem')
  })

  test('If passed value is negative number return result', () => {
    expect(pxToRem(-32)).toBe('-2rem')
  })
})
