var button = document.querySelector("div#app button")
var input = document.querySelector("div#app input")

function showAge() {
  console.log("Sua idade é: " + input.value)
}

button.addEventListener("click", showAge)