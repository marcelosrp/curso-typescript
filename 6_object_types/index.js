function showProductDetails(product) {
    if (product.isAvalible) {
        return "O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 R$ ").concat(product.price);
    }
    return 'Produto não disponível';
}
var shirt = {
    name: 'Camisa',
    price: 49.99,
    isAvalible: true
};
var snicker = {
    name: 'Jordan',
    price: 999.99,
    isAvalible: false
};
console.log(showProductDetails(shirt));
console.log(showProductDetails(snicker));
function showUserDetails(user) {
    if (user.role) {
        return "O usu\u00E1rio tem o email ".concat(user.email, " e a fun\u00E7\u00E3o \u00E9 ").concat(user.role);
    }
    return "O usu\u00E1rio tem o email ".concat(user.email);
}
var u1 = {
    email: 'user@email.com',
    role: 'admin'
};
var u2 = {
    email: 'user2@email.com'
};
console.log(showUserDetails(u1));
console.log(showUserDetails(u2));
var fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var marcelo = {
    name: 'marcelo',
    age: 32
};
var goku = {
    name: 'goku',
    age: 50,
    superpower: ['Kamehameha', 'Genki Dama']
};
console.log(marcelo);
console.log(goku);
var arnold = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: 12
};
console.log(arnold);
// 7 - Readonly Array
var myArray = ['maçã', 'laranja', 'banana'];
//myArray[3] = 'mamão'
console.log(myArray);
myArray.forEach(function (fruta) { return console.log("Fruta: ".concat(fruta)); });
var myNumberArray = [1, 2, 3, 4, 5];
var anotherUser = ['Marcelo', 32];
// 9 - tuplas com readonly
function showNumbers(numbers) {
    return "Number 0 => ".concat(numbers[0], ", Number 1 => ").concat(numbers[1]);
}
console.log(showNumbers([1, 2]));
