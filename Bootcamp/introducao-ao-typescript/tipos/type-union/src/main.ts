let age: number | string;
age = 20;
age = "vinte";


type pet = "dog" | "cat";
function showPet(pet: pet) {
  console.log(pet);
}
showPet("cat");


let variable: number | boolean | pet;
variable = 3;
variable = true;
variable = "dog";