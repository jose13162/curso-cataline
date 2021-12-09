interface User {
  name?: string;
  address?: {
    city: string;
    UF: string;
  }
}

function getCity(user: User) {
  return user.address?.city;
}

function getName(user: User) {
  return user.name;
}

let newUser: User = {
  name: "José",
  address: {
    city: "Garanhuns",
    UF: "PE"
  }
}

const cityResponse = getCity(newUser);
const nameResponse = getName(newUser);

console.log(cityResponse + "\n" + nameResponse);