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
