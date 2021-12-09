"use strict";

function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}

var civic = new Car("honda", 130);
var hb20 = new Car("hyundai", 80);
console.log(civic);
