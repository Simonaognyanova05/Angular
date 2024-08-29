class Car {
    constructor(protected brand: string, protected model: string) {

    };

    drive(): string {
        return `I drive ${this.brand}, model ${this.model}`;
    }
};

class SpecificCar extends Car {
    constructor(brand: string, model: string, protected year: number) {
        super(brand, model);
    };

    printInfo(): void {
        console.log(super.drive() + ` that was created in ${this.year}`);
    }
}


const specificCar = new SpecificCar('Opel', 'Mokka', 2022);
specificCar.printInfo();
