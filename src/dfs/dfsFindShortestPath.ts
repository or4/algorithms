export type TreeKey = string
export type Tree = { [key: TreeKey]: TreeKey[] }

export type TreeBoolean = { [key: TreeKey]: boolean }

export const dfsFindShortestPath = (tree: Tree, current: string, toFind: string): string[][] | void => {
  const findPath = (tree: Tree, current: string, toFind: string, passed: string[] = []): string[][] | void => {
    if (passed.includes(current)) {
      return
    }

    if (current === toFind) {
      return [[current]]
    }

    const acc: string[][] = []

    const children = tree[current] || []
    for (const child of children) {
      const res = findPath(tree, child, toFind, [...passed, current])
      if (res) {
        for (const i of res) {
          acc.push([current, ...i])
        }
      }
    }

    return acc.length ? acc : undefined
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
