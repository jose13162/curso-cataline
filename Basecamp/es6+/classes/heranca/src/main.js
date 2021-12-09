class Vehicle {
  constructor(wheels, fuel) {
    this.fuel = fuel
    this.wheels = wheels;
  }

  accelerate() {
    console.log("Acelerando...");
  }
}

class Motorcycle extends Vehicle {
  constructor(wheels, fuel, helmet = false) {
    super(wheels, fuel);
    this.helmet = helmet;
  }

  cram() {
    console.log(`Empinando com ${this.wheels} rodas...`);
  }

  usingHelmet() {
    console.log(this.helmet);
  }
}

const bross = new Motorcycle(2, 20, true);

bross.accelerate();
bross.cram();
bross.usingHelmet();
