var person = {
  name: "José Anselmo",
  height: 172
}

var any = {
  age: 15
}

var newObject = Object.assign(person, any)

console.log(newObject)