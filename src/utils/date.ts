import dayjs from '@/lib/dayjs'
import { assert } from './assert'

export function toFormattedDateString(
  date: number,
  format: string = 'YYYY/MM/DD',
): string {
  assert(/^[0-9]{8}$/.test(String(date)), 'value should an eight-digit number.')

  return dayjs(String(date), 'YYYYMMDD').format(format)
}
