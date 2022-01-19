var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1 - type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return parseFloat(a) + parseFloat(b);
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return 'Impossível realizar a soma';
}
console.log('/******* 1 - type guard *******/');
console.log(sum('2', '2'));
console.log(sum(10, 5));
console.log(sum('10', 5));
// 2 - Checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            return sum_1;
        }
        if (operation === 'multiply') {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            return multiply;
        }
        return 'Operação não permitida';
    }
    return 'Por favor, defina uma operação';
}
console.log('/******* 2 - Checando se o valor existe *******/');
console.log(operations([1, 2, 3], 'sum'));
console.log(operations([2, 2], 'multiply'));
console.log(operations([2, 2]));
// 3 - Instance of
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var jhon = new User('Jhon');
var paul = new SuperUser('Paul');
console.log('/******* 3 - Instance of *******/');
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        return "Ol\u00E1 ".concat(user.name, ", deseja ver os dados do sistema?");
    }
    if (user instanceof User) {
        return "Ol\u00E1 ".concat(user.name);
    }
}
console.log(userGreeting(jhon));
console.log(userGreeting(paul));
// 4 - Operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var duke = new Dog('Duke');
var bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        return "O cachorro \u00E9 da ra\u00E7a ".concat(dog.breed);
    }
    return 'O cachorro é um SRD';
}
console.log('/******* 4 - Operador in *******/');
console.log(showDogDetails(duke));
console.log(showDogDetails(bob));
