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
// 5 - Função anônima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
}, 2000);
// 6 - Tipos de objetos
function passCordinates(coord) {
    console.log(coord.lat);
    console.log(coord.long);
}
passCordinates({ lat: 152365, long: 501165 });
var pessoa = {
    nome: 'Marcelo',
    idade: 32
};
// 7 - Propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: ".concat(a, ", B: ").concat(b, ", C: ").concat(c));
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 8 - Validação de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName);
    }
    return "Ol\u00E1, ".concat(firstName);
}
console.log(advancedGreeting('Marcelo'));
console.log(advancedGreeting('Marcelo', 'Soares'));
// 9 - Union type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$ ".concat(balance));
}
showBalance(100);
showBalance('200');
var arrUnionType = ['teste', 1];
// 10 - Avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado';
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showID(id) {
    console.log("O ID \u00E9 ".concat(id));
}
showID(1);
showID('10');
function showCoords(obj) {
    console.log("X: ".concat(obj.x, ", Y: ").concat(obj.y, ", Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = {
    name: 'Marcelo',
    age: 30
};
/* type personType = {
  age: number
} */
// 14 - literal types
var test;
test = 'testando';
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection('left');
//showDirection("cima")
//15 - non null assertion operators
var p = document.getElementById('some-p');
console.log(p.innerText);
