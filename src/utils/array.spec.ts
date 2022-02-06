import { isStringArray } from '@/utils/array'

describe('isStringArray function', () => {
  test('should return true', () => {
    expect(isStringArray(['test', 'test2', 'test3'])).toBe(true)
  })

  test('should return false', () => {
    expect(isStringArray([123, 'test1', 'test2'])).toBe(false)
    expect(isStringArray([123, 456, 789])).toBe(false)
    expect(isStringArray(['test1', true, 1])).toBe(false)
  })
})
