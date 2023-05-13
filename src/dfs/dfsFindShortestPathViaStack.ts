export type TreeKey = string
export type Tree = { [key: TreeKey]: TreeKey[] }

export type TreeBoolean = { [key: TreeKey]: boolean }

type StackItem = { current: string; passed: string[] }

export const dfsFindShortestPathViaStack = (tree: Tree, current: string, toFind: string): string[][] | void => {
  const findPath = (tree: Tree, current: string, toFind: string, passed: string[] = []): string[][] | void => {
    const stack: StackItem[] = []
    stack.unshift({ current, passed })

    const paths: string[][] = []

    while (stack.length) {
      const { current, passed } = stack.shift() as any as StackItem

      if (passed.includes(current)) {
        continue
      }

      if (current === toFind) {
        paths.push([...passed, current])
      }

      if (!tree[current]) {
        continue
      }

      const children = tree[current].map((el) => ({ current: el, passed: [...passed, current] }))
      stack.unshift(...children)
    }

    return paths
  }

  const pathsArray = findPath(tree, current, toFind)

  if (pathsArray?.[0]) {
    const minLength = getMinLength(pathsArray)

    return pathsArray.filter((item) => item.length === minLength)
  }
}

const getMinLength = <T>(arr: T[][]): number => {
  return arr.reduce((acc, curr) => {
    if (acc.length > curr.length) {
      return curr
    }

    return acc
  }, arr[0] || []).length
}
