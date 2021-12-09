var button = document.querySelector("div#app button");

button.addEventListener("click", function () {
  axios
    .get("https://api.github.com/users")
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      console.log("Requisição finalizada")
    })
});
