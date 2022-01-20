var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - void
function withoutReturn() {
    console.log('Esta função não tem retorno!');
}
withoutReturn();
// 2 - Callback como argumento
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(fn, userName) {
    console.log('Preparando a função');
    var greet = fn(userName);
    console.log(greet);
}
preGreeting(greeting, 'Marcelo');
preGreeting(greeting, 'Larissa');
// 3 - Generic Functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var userObject = mergeObjects({ name: 'Marcelo', lastname: 'Soares' }, { age: 32 });
console.log(userObject);
// 4 - constraints
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '50'));
// 5 - especificar tipo de argumentos
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([7, 8, 9], ['10', '11', '12']));
// 6 - Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name, ", tudo bem?");
}
console.log(modernGreeting('Marcelo'));
console.log(modernGreeting('Marcelo', 'Sr. Dr.'));
// 7 - Parâmetros default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(10, 30));
console.log(somaDefault(10));
// 8 - Tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        return x[0];
    }
    return x;
}
console.log(doSomething('teste'));
console.log(doSomething([1, 2, 3]));
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//console.log(showErrorMessage('Erro no sistema, tente novamente!'))
// 10 - Rest operator
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(100, 1, 3, 77));
// 11 - destructuring como params
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9 ".concat(name, " e custa R$ ").concat(price);
}
var shirt = { name: 'camisa', price: 49.99 };
console.log(showProductDetails(shirt));
