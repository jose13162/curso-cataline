// any
let variable: any;
variable = 0
variable = "0";
variable = true;
variable = [];
variable = {};

// void 
function action(): void {
  console.log("Função sem retorno");
}

// never
function error(): never {
  throw new Error("error");
}
error();