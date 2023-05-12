/**
 * Find two numbers whose sum is the target
 */
export function twoSum(nums: number[], target: number): number[] {
  const set: { [key: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    const needToFind = target - num
    if (set[needToFind] !== undefined) {
      return [i, set[needToFind]]
    }

    set[num] = i
  }

  return []
}
