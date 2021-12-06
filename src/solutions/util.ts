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

export const fastMax = (arr: number[]) =>
  arr.reduce((max, v) => (max >= v ? max : v), -Infinity)

export const fastMin = (arr: number[]) =>
  arr.reduce((min, v) => (min <= v ? min : v), Infinity)

export interface Point {
  x: number
  y: number
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
        x: fastMin(cells.map(({ x }) => x)),
        y: fastMin(cells.map(({ y }) => y))
      },
      max: {
        x: fastMax(cells.map(({ x }) => x)),
        y: fastMax(cells.map(({ y }) => y))
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

  key(x: number, y: number) {
    return `${x},${y}`
  }

  set(x: number, y: number, value: T) {
    this.grid.set(this.key(x, y), value)
  }

  get(x: number, y: number) {
    return this.grid.has(this.key(x, y))
      ? this.grid.get(this.key(x, y))!
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
