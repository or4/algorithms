/**
 * @param arr - sorted number array
 * @param el - number to find
 * @returns
 */

export const binarySearch = (arr: number[], el: number): { compares: number; result: number } => {
  let compares = 0
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const middleElIndex = Math.floor((left + right) / 2)
    const middleEl = arr[middleElIndex]

    if (el === middleEl) {
      compares++

      return { compares, result: middleElIndex }
    }

    if (el < middleEl) {
      compares++
      right = middleElIndex - 1
    } else {
      compares++
      left = middleElIndex + 1
    }
  }

  return { compares, result: -1 }
}
