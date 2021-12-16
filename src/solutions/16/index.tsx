import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { max, min, nTimes, product, sum } from '../util'

const parseInput = () =>
  input
    .split('')
    .map((c) => parseInt(c, 16).toString(2).padStart(4, '0'))
    .join('')

const getOperatorValue = (nums: number[], type: number) => {
  switch (type) {
    case 0:
      return nums.reduce(sum)
    case 1:
      return nums.reduce(product)
    case 2:
      return nums.reduce(min)
    case 3:
      return nums.reduce(max)
    case 5:
      return nums[0] > nums[1] ? 1 : 0
    case 6:
      return nums[0] < nums[1] ? 1 : 0
    case 7:
      return nums[0] === nums[1] ? 1 : 0
    default:
      return 0
  }
}

const parsePacket = (packet: string) => {
  const extract = (n: number) => {
    const result = packet.slice(0, n)
    packet = packet.slice(n)
    return result
  }

  const packets: string[] = []
  let value = 0

  const version = extract(3)
  const type = extract(3)
  let fullPacket = version + type

  const parseLiteral = () => {
    let bits: string
    let output = ''
    do {
      bits = extract(5)
      fullPacket += bits
      output += bits.slice(1)
    } while (bits.startsWith('1'))
    value = parseInt(output, 2)
  }

  const parseOperator = () => {
    const toAdd: string[] = []
    const values: number[] = []
    let subPackets = ''

    const addSubPacket = () => {
      const { packets: newPackets, value } = parsePacket(packet)
      subPackets += newPackets[0]
      extract(newPackets[0].length)
      toAdd.push(...newPackets)
      values.push(value)
    }

    const lType = extract(1)
    fullPacket += lType
    if (lType === '0') {
      const numBits = extract(15)
      fullPacket += numBits
      while (subPackets.length < parseInt(numBits, 2)) {
        addSubPacket()
      }
    } else {
      const numPackets = extract(11)
      fullPacket += numPackets
      nTimes(parseInt(numPackets, 2), addSubPacket)
    }
    fullPacket += subPackets

    packets.push(...toAdd)
    value = getOperatorValue(values, parseInt(type, 2))
  }

  parseInt(type, 2) === 4 ? parseLiteral() : parseOperator()

  return { packets: [fullPacket, ...packets], value }
}

const getVersionNumSum = (packets: string[]) =>
  packets.map((str) => parseInt(str.slice(0, 3), 2)).reduce(sum)

export const Part1 = () => {
  const packet = parseInput()
  const { packets } = parsePacket(packet)

  return (
    <p>
      The sum of the version numbers in all packets is{' '}
      <Answer>{getVersionNumSum(packets)}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const packet = parseInput()
  const { value } = parsePacket(packet)

  return (
    <p>
      The BITS transmission evaluates to <Answer>{value}</Answer>.
    </p>
  )
}
