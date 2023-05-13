import { dfsFindShortestPathViaStack, Tree } from './dfsFindShortestPathViaStack'

const treeCase1: Tree = {
  a: ['b', 'c1', 'c'],
  c1: ['c2'],
  c2: ['c'],
  c: ['d'],
}

const treeCase2: Tree = {
  a: ['b', 'c'],
  b: ['a'],
  c: ['d'],
}

const treeCase3: Tree = {
  a: ['b', 'c1', 'c', 'e'],
  c1: ['c2'],
  c2: ['c'],
  c: ['d'],
  e: ['d'],
}

describe('dfsFindShortestPathViaStack', () => {
  it('should work with simple case', () => {
    expect(dfsFindShortestPathViaStack(treeCase1, 'a', 'd')).toEqual([['a', 'c', 'd']])
  })
  it('should work with circular case', () => {
    expect(dfsFindShortestPathViaStack(treeCase2, 'a', 'd')).toEqual([['a', 'c', 'd']])
  })
  it('should work with many success ways', () => {
    expect(dfsFindShortestPathViaStack(treeCase3, 'a', 'd')).toEqual([
      ['a', 'c', 'd'],
      ['a', 'e', 'd'],
    ])
  })
})
