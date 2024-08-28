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
var DreamCar = /** @class */ (function (_super) {
    __extends(DreamCar, _super);
    function DreamCar(brand, model) {
        var _this = _super.call(this, brand) || this;
        _this.model = model;
        return _this;
    }
    ;
    DreamCar.prototype.printDream = function () {
        console.log(_super.prototype.drive.call(this) + " My Dream is ".concat(this.model, " ").concat(this.brand));
    };
    return DreamCar;
}(Car));
// class Animal {
//     constructor(public breed: string, public name: string, public age: number) {
//     };
//     printInfo(): void {
//         console.log(`Name of ${this.breed} is ${this.name}. It is ${this.age} years old.`);
//     }
// }
var car = new Car('Mercedes');
console.log(car.drive());
var dreamCar = new DreamCar('Opel', 'Mokka');
dreamCar.printDream();
// const animal = new Animal('Cat', 'Maxi', 1);
// animal.printInfo();
