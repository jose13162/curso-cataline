const person = {
  name: "José",
  age: 15,
  height: 1.71,
  company: "Bootcamp",
};

const person1 = {
  ...person,
  company: "Basecamp",
};

console.log(person1);
