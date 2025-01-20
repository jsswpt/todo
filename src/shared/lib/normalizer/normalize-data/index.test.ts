import { expect, test } from 'vitest'

import { normalizeData } from '.'

const testValue = { id: 1, someOtherField: '123' }

test('Test if normalizeData works correctly', () => {
  expect(normalizeData([testValue])).toStrictEqual({
    [testValue.id]: testValue,
  })
})
