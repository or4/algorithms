export const isPalindrome = (value: number): boolean => {
  if (value < 0) {
    return false
  }

  let val = value

  const acc = []

  while (true) {
    acc.push(val % 10)
    val = Math.floor(val / 10)
    if (val === 0) {
      break
    }
  }

  return isPalindromeArray(acc)
}

export const isPalindromeStr = (value: number): boolean => {
  if (value < 0) {
    return false
  }

  const str = String(value)

  return isPalindromeArray<string>(Array.from(str))
}

export const isPalindromeArray = <T>(arr: T[]): boolean => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false
    }

    if (i >= len - i - 1) {
      break
    }
  }

  return true
}
