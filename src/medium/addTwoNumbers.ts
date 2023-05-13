export class ListNode {
  val: number
  next: ListNode | null

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let res = null
  let head = null
  let incFlag = false
  while (true) {
    if (!l1 && !l2) {
      if (incFlag && res) {
        res.next = new ListNode(1)
      }

      return head
    }

    let val = (l1?.val || 0) + (l2?.val || 0) + (incFlag ? 1 : 0)
    if (val > 9) {
      incFlag = true
    } else {
      incFlag = false
    }

    val = val % 10

    if (!res) {
      res = new ListNode(val)
      head = res
    } else {
      res.next = new ListNode(val)
      res = res.next
    }

    l1 = l1?.next || null
    l2 = l2?.next || null
  }
}
