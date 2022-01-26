// 1 - Tipo de objeto para função com interface
interface Product {
  name: string
  price: number
  isAvalible: boolean
}

function showProductDetails(product: Product) {
  if (product.isAvalible) {
    return `O nome do produto é ${product.name} e seu preço é R$ ${product.price}`
  }

  return 'Produto não disponível'
}

const shirt: Product = {
  name: 'Camisa',
  price: 49.99,
  isAvalible: true,
}

const snicker: Product = {
  name: 'Jordan',
  price: 999.99,
  isAvalible: false,
}

console.log(showProductDetails(shirt))
console.log(showProductDetails(snicker))

// 2 - Propriedade opcional em interface
interface User {
  email: string
  role?: string
}

function showUserDetails(user: User) {
  if (user.role) {
    return `O usuário tem o email ${user.email} e a função é ${user.role}`
  }
  return `O usuário tem o email ${user.email}`
}

const u1: User = {
  email: 'user@email.com',
  role: 'admin',
}

const u2: User = {
  email: 'user2@email.com',
}

console.log(showUserDetails(u1))
console.log(showUserDetails(u2))

// 3 - Propriedades readonly
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4,
}

console.log(fusca)
//fusca.wheels = 5

// 4 - Index Signature
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10,
}

coords.y = 15

console.log(coords)

// 5 - Extending Interfaces
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpower: string[]
}

const marcelo: Human = {
  name: 'marcelo',
  age: 32,
}

const goku: SuperHuman = {
  name: 'goku',
  age: 50,
  superpower: ['Kamehameha', 'Genki Dama'],
}

console.log(marcelo)
console.log(goku)

// 6 - Intersection Types
interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'shotgun',
  caliber: 12,
}

console.log(arnold)

// 7 - Readonly Array
let myArray: ReadonlyArray<string> = ['maçã', 'laranja', 'banana']
//myArray[3] = 'mamão'
console.log(myArray)

myArray.forEach(fruta => console.log(`Fruta: ${fruta}`))

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
//const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5]

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ['Marcelo', 32]

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  return `Number 0 => ${numbers[0]}, Number 1 => ${numbers[1]}`
}

console.log(showNumbers([1, 2]))
