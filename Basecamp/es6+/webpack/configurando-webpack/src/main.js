class Car {
  constructor(brand, price = 10) {
    this.brand = brand;
    this.price = price;
  }

  run() {
    console.log("correndo");
  }
}

const civic = new Car("honda", 130);
civic.run();

console.log(civic);
