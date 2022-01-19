// 1 - type guard
function sum(a: number | string, b: number | string) {
  if (typeof a === 'string' && typeof b === 'string') {
    return parseFloat(a) + parseFloat(b)
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }

  return 'Impossível realizar a soma'
}

console.log('/******* 1 - type guard *******/')
console.log(sum('2', '2'))
console.log(sum(10, 5))
console.log(sum('10', 5))

// 2 - Checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === 'sum') {
      const sum = arr.reduce((i, total) => i + total)
      return sum
    }

    if (operation === 'multiply') {
      const multiply = arr.reduce((i, total) => i * total)
      return multiply
    }

    return 'Operação não permitida'
  }

  return 'Por favor, defina uma operação'
}

console.log('/******* 2 - Checando se o valor existe *******/')
console.log(operations([1, 2, 3], 'sum'))
console.log(operations([2, 2], 'multiply'))
console.log(operations([2, 2]))

// 3 - Instance of
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const jhon = new User('Jhon')
const paul = new SuperUser('Paul')

console.log('/******* 3 - Instance of *******/')
console.log(jhon)
console.log(paul)

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    return `Olá ${user.name}, deseja ver os dados do sistema?`
  }

  if (user instanceof User) {
    return `Olá ${user.name}`
  }
}

console.log(userGreeting(jhon))
console.log(userGreeting(paul))

// 4 - Operador in
class Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name

    if (breed) {
      this.breed = breed
    }
  }
}

const duke = new Dog('Duke')
const bob = new Dog('Bob', 'Pastor Alemão')

function showDogDetails(dog: Dog) {
  if ('breed' in dog) {
    return `O cachorro é da raça ${dog.breed}`
  }

  return 'O cachorro é um SRD'
}

console.log('/******* 4 - Operador in *******/')
console.log(showDogDetails(duke))
console.log(showDogDetails(bob))
