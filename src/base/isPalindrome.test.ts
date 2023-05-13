import { isPalindrome, isPalindromeStr } from './isPalindrome'

describe('isPalindrome', () => {
  it('should work', () => {
    expect(isPalindrome(11)).toEqual(true)
    expect(isPalindrome(121)).toEqual(true)
    expect(isPalindrome(10)).toEqual(false)
    expect(isPalindrome(12357321)).toEqual(false)
    expect(isPalindrome(-11)).toEqual(false)
  })
})

describe('isPalindromeStr', () => {
  it('should work', () => {
    expect(isPalindromeStr(11)).toEqual(true)
    expect(isPalindromeStr(121)).toEqual(true)
    expect(isPalindromeStr(10)).toEqual(false)
    expect(isPalindromeStr(12357321)).toEqual(false)
    expect(isPalindromeStr(-11)).toEqual(false)
  })
})
