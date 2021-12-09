"use strict";

var showProduct = function showProduct(product, price) {
  console.log("O valor de ".concat(product, " \xE9 R$ ").concat(price, ", pode comprar!"));
};

showProduct("camisa", 15);
