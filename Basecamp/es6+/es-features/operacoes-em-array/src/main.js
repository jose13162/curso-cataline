const cars = ["fusca", "civic", "hb20"];

const hasFusca = cars.some(function (car) {
  return car == "fusca";
});

console.log(hasFusca);
