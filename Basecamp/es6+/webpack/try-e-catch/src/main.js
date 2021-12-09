class Cake {
  constructor(flavor, color, size) {
    this.flavor = flavor
    this.color = color
    this.size = size
  }
}

class Person {
  constructor(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
  }

  eat(food) {
    
  }
}

const cake = new Cake("chocolate", "blue", "25cm")
const me = new Person("José", 16, 171)

console.log(cake)