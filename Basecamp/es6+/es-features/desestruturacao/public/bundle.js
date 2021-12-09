"use strict";

var person = {
  firstName: "José",
  secondName: "Anselmo",
  age: 15,
  address: {
    city: "Garanhuns",
    UF: "PE"
  }
};

var showFullName = function showFullName(_ref) {
  var firstName = _ref.firstName,
      secondName = _ref.secondName;
  console.log("".concat(firstName, " ").concat(secondName));
};

showFullName(person);
