import { addTwoNumbers, ListNode } from './addTwoNumbers'

describe('addTwoNumbers', () => {
  it('should work', () => {
    const el1 = new ListNode(1, new ListNode(2, new ListNode(3)))
    const el2 = new ListNode(2, new ListNode(4, new ListNode(6)))
    const el3 = new ListNode(3, new ListNode(6, new ListNode(9)))

    expect(addTwoNumbers(el1, el2)).toEqual(el3)
  })

  it('should work with overflow', () => {
    const el1 = new ListNode(4, new ListNode(2, new ListNode(3)))
    const el2 = new ListNode(7, new ListNode(4, new ListNode(6)))
    const el3 = new ListNode(1, new ListNode(7, new ListNode(9)))

    expect(addTwoNumbers(el1, el2)).toEqual(el3)
  })

  it('should work with corner case', () => {
    const el1 = new ListNode(9, new ListNode(9, new ListNode(9)))
    const el2 = new ListNode(9)
    const el3 = new ListNode(8, new ListNode(0, new ListNode(0, new ListNode(1))))

    expect(addTwoNumbers(el1, el2)).toEqual(el3)
  })
})
