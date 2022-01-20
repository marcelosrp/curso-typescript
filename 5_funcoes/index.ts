// 1 - void
function withoutReturn(): void {
  console.log('Esta função não tem retorno!')
}

withoutReturn()

// 2 - Callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`
}

function preGreeting(fn: (name: string) => string, userName: string) {
  console.log('Preparando a função')
  const greet = fn(userName)
  console.log(greet)
}

preGreeting(greeting, 'Marcelo')
preGreeting(greeting, 'Larissa')

// 3 - Generic Functions
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(['a', 'b', 'c']))

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  }
}

const userObject = mergeObjects(
  { name: 'Marcelo', lastname: 'Soares' },
  { age: 32 },
)

console.log(userObject)

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber('12', '50'))

// 5 - especificar tipo de argumentos
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays<number | string>([7, 8, 9], ['10', '11', '12']))

// 6 - Parâmetros opcionais
function modernGreeting(name: string, greet?: string): string {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }

  return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting('Marcelo'))
console.log(modernGreeting('Marcelo', 'Sr. Dr.'))

// 7 - Parâmetros default
function somaDefault(n: number, m = 10): number {
  return n + m
}

console.log(somaDefault(10, 30))
console.log(somaDefault(10))

// 8 - Tipo unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    return x[0]
  }

  return x
}

console.log(doSomething('teste'))
console.log(doSomething([1, 2, 3]))

// 9 - never
function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

//console.log(showErrorMessage('Erro no sistema, tente novamente!'))

// 10 - Rest operator
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(100, 1, 3, 77))

// 11 - destructuring como params
function showProductDetails({
  name,
  price,
}: {
  name: string
  price: number
}): string {
  return `O nome do produto é ${name} e custa R$ ${price}`
}

const shirt = { name: 'camisa', price: 49.99 }

console.log(showProductDetails(shirt))
