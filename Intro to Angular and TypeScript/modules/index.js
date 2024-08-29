"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberValidator_1 = require("./numberValidator");
var numValidate = new numberValidator_1.NumberValidator();
console.log(numValidate.validate('1')); //true
console.log(numValidate.validate('abv')); //false
console.log(numValidate.validate('+-123')); //false
