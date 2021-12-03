import { FunctionComponent } from 'preact'
import * as day1 from './01'
import * as day2 from './02'
import * as day3 from './03'

export interface Solution {
  Part1?: FunctionComponent
  Part2?: FunctionComponent
}

const solutions: Solution[] = [day1, day2, day3]

export default solutions
