export function isStringArray(arr: unknown[]): arr is string[] {
  return arr.every((el) => typeof el === 'string')
}
