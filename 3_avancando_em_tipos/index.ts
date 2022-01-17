// 1 - Arrays
const numbers: number[] = [1, 2, 3]
const strings: string[] = ['marcelo', 'larissa', 'duke', 'henrique']

const arrNum: Array<number> = [1, 2, 3, 4]
const arrStrs: Array<string> = ['marcelo', 'larissa']

// 2 - Any
const arr1: any = [1, 'Marcelo', true, { nome: 'duke' }]

// 3 - Parâmetro de funções
function soma(a: number, b: number) {
  console.log(a + b)
}

soma(10, 20)

// 4 - Retorno de função
function greeting(name: string): string {
  return `Olá ${name}`
}

greeting('Marcelo')

// 5 - Função anônima
setTimeout(() => {
  const sallary: number = 1000

  // console.log(parseFloat(sallary))
}, 2000)

// 6 - Tipos de objetos
function passCordinates(coord: { lat: number; long: number }) {
  console.log(coord.lat)
  console.log(coord.long)
}

passCordinates({ lat: 152365, long: 501165 })

const pessoa: { nome: string; idade: number } = {
  nome: 'Marcelo',
  idade: 32,
}

// 7 - Propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log(`A: ${a}, B: ${b}, C: ${c}`)
}

showNumbers(1, 2, 3)
showNumbers(4, 5)

// 8 - Validação de props opcionais
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}`
  }

  return `Olá, ${firstName}`
}

console.log(advancedGreeting('Marcelo'))
console.log(advancedGreeting('Marcelo', 'Soares'))

// 9 - Union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$ ${balance}`)
}

showBalance(100)
showBalance('200')

const arrUnionType: Array<string | number> = ['teste', 1]

// 10 - Avançando em union types
function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado'
  }

  return `A função do usuário é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('Admin'))

// 11 - Type alias
type ID = string | number

function showID(id: ID) {
  console.log(`O ID é ${id}`)
}

showID(1)
showID('10')

// 12 - Introdução as Interfaces
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
}

showCoords(coordObj)

// 13 - type alias x interfaces
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {
  name: 'Marcelo',
  age: 30,
}

type personType = {
  name: string
}

/* type personType = {
  age: number
} */

// 14 - literal types
let test: 'testando'

test = 'testando'

function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é: ${direction}`)
}

showDirection('left')
//showDirection("cima")

//15 - non null assertion operators
const p = document.getElementById('some-p')
console.log(p!.innerText)

// 16 - Bigint
let n: bigint

n = 1000n

// 17 - Symbol
let symbolA: symbol = Symbol('a')
let symbolB: symbol = Symbol('a')

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
