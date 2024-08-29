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
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    ;
    Car.prototype.drive = function () {
        return "I drive ".concat(this.brand, ", model ").concat(this.model);
    };
    return Car;
}());
;
var SpecificCar = /** @class */ (function (_super) {
    __extends(SpecificCar, _super);
    function SpecificCar(brand, model, year) {
        var _this = _super.call(this, brand, model) || this;
        _this.year = year;
        return _this;
    }
    ;
    SpecificCar.prototype.printInfo = function () {
        console.log(_super.prototype.drive.call(this) + " that was created in ".concat(this.year));
    };
    return SpecificCar;
}(Car));
var specificCar = new SpecificCar('Opel', 'Mokka', 2022);
specificCar.printInfo();
