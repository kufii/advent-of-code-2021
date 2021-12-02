import { FunctionComponent } from 'preact'
import * as day1 from './01'
import * as day2 from './02'

export interface Solution {
  Part1?: FunctionComponent
  Part2?: FunctionComponent
}

const solutions: Solution[] = [day1, day2]

export default solutions
