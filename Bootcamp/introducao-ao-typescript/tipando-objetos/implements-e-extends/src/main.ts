// Extends -- une duas interfaces
interface Vehicle {
  wheels: number;
  accelerate: () => void;
  brake: () => void;
}

interface Motorcycle extends Vehicle {
  helmet: boolean;
  trick: () => void;
}

let bross: Motorcycle = {
  wheels: 2,
  helmet: true,
  accelerate: () => {
    console.log("Bross accelerating...");
  },
  brake: () => {
    console.log("Bross braking...");
  },
  trick: () => {
    console.log("Bross tricking...");
  }
};

bross.accelerate();

// Implements -- cria uma classe através de uma interface
class createVehicle implements Vehicle {
  wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }

  accelerate() {
    console.log("Vehicle accelerating...");
  }

  brake() {
    console.log("Vehicle braking...");
  }
}

createVehicle.prototype.brake();