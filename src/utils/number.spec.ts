import { add } from '@/utils/number'

describe('add function', () => {
  test('should return valid number', () => {
    expect(add(1, 1)).toEqual(2)
  })
})
