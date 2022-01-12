// 1 - Arrays
var numbers = [1, 2, 3];
var strings = ['marcelo', 'larissa', 'duke', 'henrique'];
var arrNum = [1, 2, 3, 4];
var arrStrs = ['marcelo', 'larissa'];
// 2 - Any
var arr1 = [1, 'Marcelo', true, { nome: 'duke' }];
// 3 - Parâmetro de funções
function soma(a, b) {
    console.log(a + b);
}
soma(10, 20);
// 4 - Retorno de função
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
greeting('Marcelo');
