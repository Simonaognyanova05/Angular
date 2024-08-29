import { NumberValidator } from "./numberValidator";

const numValidate = new NumberValidator();
console.log(numValidate.validate('1')); //true
console.log(numValidate.validate('abv')); //false
console.log(numValidate.validate('+-123')); //false


