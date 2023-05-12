export interface TreeNode {
  value?: number
  children?: TreeNode[]
}

export const treeTraversal = (node: TreeNode) => {
  const stack: TreeNode[] = []
  const output: number[] = []

  stack.push(node)

  while (stack.length) {
    const val = stack.shift()
    val?.value && output.push(val.value)

    const children = val?.children
    if (!children?.length) {
      continue
    }

    stack.unshift(...children)
  }

  return output
}
