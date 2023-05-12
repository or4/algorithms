import { binarySearch } from './binarySearch'

describe('binarySearch', () => {
  it('should work simple case', () => {
    const arr = Array.from(new Array(100)).map((_el, index) => index)
    const el = arr[3]
    expect(binarySearch(arr, el)).toEqual({ compares: 6, result: 3 })
  })

  it.skip('should work with different cases', () => {
    for (let j = 1; j < 100; j++) {
      const arr = Array.from(new Array(j)).map((_el, index) => index)
      for (let i = 0; i < arr.length; i++) {
        const el = arr[i]
        expect(binarySearch(arr, el).result).toEqual(i)
      }
    }
  })

  it('pass compares', () => {
    let compares = 0
    for (let j = 1; j < 100; j++) {
      const arr = Array.from(new Array(j)).map((_el, index) => index)
      for (const el of arr) {
        compares += binarySearch(arr, el).compares
      }
    }

    expect(compares).toEqual(25317)
  })
})
