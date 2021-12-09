"use strict";

var cars = ["fusca", "civic", "hb20"];
var hasFusca = cars.some(function (car) {
  return car == "fusca";
});
console.log(hasFusca);
