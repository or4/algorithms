import { TreeNode, treeTraversal } from './treeTraversal'

const testTree: TreeNode = {
  value: 1,
  children: [
    { value: 2 },
    { value: 3 },
    { children: [{ value: 4 }, { value: 5, children: [{ value: 6 }] }] },
    { value: 7 },
    { value: 8 },
    { children: [{ children: [{ children: [{ value: 9 }] }] }] },
  ],
}

describe('treeTraversal', () => {
  it('should work', () => {
    expect(treeTraversal(testTree)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
