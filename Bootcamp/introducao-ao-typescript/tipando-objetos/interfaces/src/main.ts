type UF = "PE" | "SP";

interface User {
  name: string;
  address: {
    city: string;
    UF: UF;
  }
}

function getCity(user: User): string {
  return user.address.city;
}

let newUser: User = {
  name: "José",
  address: {
    city: "Garanhuns",
    UF: "PE"
  }
}

console.log(getCity(newUser));