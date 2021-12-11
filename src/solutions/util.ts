export type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T

export const truthy = <T>(value: T): value is Truthy<T> => Boolean(value)

export const nonNullable = <T>(value: T): value is NonNullable<T> =>
  value != null

export const range = (start: number, end: number) => {
  const arr = []
  for (let n = start; n <= end; n++) {
    arr.push(n)
  }
  return arr
}

export const make2dArray = <T>(ySize: number, xSize: number, fill: T): T[][] =>
  Array(ySize)
    .fill(null)
    .map(() => Array(xSize).fill(fill))

export const output2dArray = (arr: (string | number)[][]) =>
  arr.map((line) => line.join('')).join('\n')

export const max = (a: number, b: number) => (b > a ? b : a)

export const min = (a: number, b: number) => (b < a ? b : a)

export const maxBy =
  <T>(cb: (item: T) => number) =>
  (a: T, b: T) =>
    cb(b) > cb(a) ? b : a

export const minBy =
  <T>(cb: (item: T) => number) =>
  (a: T, b: T) =>
    cb(b) < cb(a) ? b : a

export interface Point {
  x: number
  y: number
}

export const pointToKey = ({ x, y }: Point) => `${x},${y}`

export const getAdjacent = (map: any[][], { x, y }: Point, diagonal = false) =>
  [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    ...(diagonal
      ? [
          [-1, -1],
          [-1, 1],
          [1, -1],
          [1, 1]
        ]
      : [])
  ]
    .map(([dx, dy]) => ({ x: x + dx, y: y + dy }))
    .filter(
      ({ x, y }) => x >= 0 && y >= 0 && y < map.length && x < map[y].length
    )

export const parse2dArray = <T>(str: string, cbMap: (c: string) => T) =>
  str.split('\n').map((line) => [...line].map(cbMap))

export const iterate2dArray = function* <T>(map: T[][]) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      yield { x, y, value: map[y][x] }
    }
  }
}
export class InfiniteGrid<T> {
  fill: T
  grid: Map<string, T>

  constructor(fill: T) {
    this.fill = fill
    this.grid = new Map()
  }

  get cells() {
    return [...this.grid.entries()]
      .map(([pos, value]) => [...pos.split(','), value])
      .map(([x, y, value]) => ({ x: Number(x), y: Number(y), value }))
  }

  get bounds() {
    const cells = this.cells
    return {
      min: {
        x: cells.map(({ x }) => x).reduce(min),
        y: cells.map(({ y }) => y).reduce(min)
      },
      max: {
        x: cells.map(({ x }) => x).reduce(max),
        y: cells.map(({ y }) => y).reduce(min)
      }
    }
  }

  toArray(min?: Point, max?: Point) {
    const bounds = this.bounds
    if (!min) min = bounds.min
    if (!max) max = bounds.max
    const array = make2dArray(max.y - min.y + 1, max.x - min.x + 1, this.fill)
    for (let y = min.y; y <= max.y; y++) {
      for (let x = min.x; x <= max.x; x++) {
        array[y - min.y][x - min.x] = this.get(x, y)
      }
    }
    return array
  }

  set(x: number, y: number, value: T) {
    this.grid.set(pointToKey({ x, y }), value)
  }

  get(x: number, y: number) {
    return this.grid.has(pointToKey({ x, y }))
      ? this.grid.get(pointToKey({ x, y }))!
      : this.fill
  }

  clone() {
    const newGrid = new InfiniteGrid(this.fill)
    newGrid.grid = new Map(this.grid)
    return newGrid
  }
}

export const nTimes = (n: number, cb: (n: number) => unknown) => {
  for (let i = 0; i < n; i++) cb(i)
}

export const sum = (a: number, b: number) => a + b

export const product = (a: number, b: number) => a * b

export const alphaSort = (a: string, b: string) => a.localeCompare(b)

export const sortStr = (str: string) => [...str].sort(alphaSort).join('')

export const sortNum = (a: number, b: number) => a - b
