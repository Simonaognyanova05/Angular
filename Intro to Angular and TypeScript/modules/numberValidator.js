"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValidator = void 0;
var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.validate = function (arg) {
        return !isNaN(+arg);
    };
    return NumberValidator;
}());
exports.NumberValidator = NumberValidator;
