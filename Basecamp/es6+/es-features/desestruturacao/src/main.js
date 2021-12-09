const person = {
  firstName: "José",
  secondName: "Anselmo",
  age: 15,
  address: {
    city: "Garanhuns",
    UF: "PE",
  },
};

const showFullName = ({firstName, secondName}) => {
  console.log(`${firstName} ${secondName}`);
};

showFullName(person);
