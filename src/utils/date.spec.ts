import { toFormattedDateString } from '@/utils/date'

describe('toFormattedDateString function', () => {
  test('should return formatted date string', () => {
    expect(toFormattedDateString(20220101)).toBe('2022/01/01')
    expect(toFormattedDateString(20220101, 'YYYY-MM-DD')).toBe('2022-01-01')
  })

  test('should throw error when invalid parameter is given', () => {
    expect(() => {
      toFormattedDateString(202211)
    }).toThrow()
  })
})
