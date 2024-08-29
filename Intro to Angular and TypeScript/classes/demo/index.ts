class Car {
    constructor(public brand: string) {
    };

    drive(): string {
        return this.brand;
    }
}

class DreamCar extends Car {
    constructor(brand: string, protected model: string) {
        super(brand)
    };

    printDream(): void {
        console.log(super.drive() + ` My Dream is ${this.model} ${this.brand}`);
    }
}

// class Animal {
//     constructor(public breed: string, public name: string, public age: number) {

//     };

//     printInfo(): void {
//         console.log(`Name of ${this.breed} is ${this.name}. It is ${this.age} years old.`);
//     }
// }

const car = new Car('Mercedes');
console.log(car.drive());

const dreamCar = new DreamCar('Opel', 'Mokka');
dreamCar.printDream();

// const animal = new Animal('Cat', 'Maxi', 1);
// animal.printInfo();

