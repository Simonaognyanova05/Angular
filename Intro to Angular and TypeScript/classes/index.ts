class Car {
    constructor(public brand: string) {
    };

    drive(): string {
        return this.brand;
    }
}

class Animal {
    constructor(public breed: string, public name: string, public age: number) {

    };

    printInfo(): void {
        console.log(`Name of ${this.breed} is ${this.name}. It is ${this.age} years old.`);
    }
}

const car = new Car('Opel');
console.log(car.drive());

const animal = new Animal('Cat', 'Maxi', 1);
animal.printInfo();

