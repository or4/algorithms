import { dfsFindAnyPath, Tree } from './dfsFindAnyPath'

const treeCase1: Tree = {
  a: ['b', 'c'],
  c: ['d'],
}

const treeCase2: Tree = {
  a: ['c', 'e', 'f', 'g', 'h', 'i', 'b'],
  c: ['a1', 'a2', 'a3', 'a4', 'a5'],
  a5: ['a'],
  b: ['d'],
  // c: ['d', 'e', 'f'],
  // f: ['e', 't'],
}

const treeCase3: Tree = {
  a: ['b', 'c'],
  b: ['a'],
  c: ['d'],
}

describe('dfsFindAnyPath', () => {
  it('should with simple case', () => {
    expect(dfsFindAnyPath(treeCase1, 'a', 'd')).toEqual(['a', 'c', 'd'])
  })
  it('should work with complex case', () => {
    expect(dfsFindAnyPath(treeCase2, 'a', 'd')).toEqual(['a', 'b', 'd'])
  })
  it('should work with circular case', () => {
    expect(dfsFindAnyPath(treeCase3, 'a', 'd')).toEqual(['a', 'c', 'd'])
  })
})
