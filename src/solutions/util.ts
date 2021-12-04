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
