interface User {
  readonly name: string;
  age: number;
}

let user: User = {
  name: "José",
  age: 15
}

user.age = 16;
user.name = "Anselmo";