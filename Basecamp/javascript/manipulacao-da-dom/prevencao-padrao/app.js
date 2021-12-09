var link = document.querySelector("div#app a")

link.addEventListener("click", function (event) {
  event.preventDefault()
  console.log("Comportamento padrão evitado")
})