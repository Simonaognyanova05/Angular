var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    ;
    Car.prototype.drive = function () {
        return this.brand;
    };
    return Car;
}());
var Animal = /** @class */ (function () {
    function Animal(breed, name, age) {
        this.breed = breed;
        this.name = name;
        this.age = age;
    }
    ;
    Animal.prototype.printInfo = function () {
        console.log("Name of ".concat(this.breed, " is ").concat(this.name, ". It is ").concat(this.age, " years old."));
    };
    return Animal;
}());
var car = new Car('Opel');
console.log(car.drive());
var animal = new Animal('Cat', 'Maxi', 1);
animal.printInfo();
