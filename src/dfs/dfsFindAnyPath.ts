export type TreeKey = string
export type Tree = { [key: TreeKey]: TreeKey[] }

export type TreeBoolean = { [key: TreeKey]: boolean }

export const dfsFindAnyPath = (tree: Tree, current: string, toFind: string): string[] | void => {
  const visited: TreeBoolean = {}

  const dfs = (tree: Tree, current: string, toFind: string): string[] | void => {
    if (visited[current]) {
      return
    }
    visited[current] = true

    if (current === toFind) {
      return [current]
    }

    const children = tree[current] || []
    for (const child of children) {
      const res = dfs(tree, child, toFind)

      if (res) {
        return [current, ...res]
      }
    }
  }

  return dfs(tree, current, toFind)
}
