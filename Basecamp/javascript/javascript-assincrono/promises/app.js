var boughtProducts = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var products = ["Camisa", "Sapato", "Calça"];
    reject("A promessa foi rejeitada");
  }, 3000);
});

boughtProducts
  .then(function (products) {
    console.log(products);
  })
  .catch(function (error) {
    console.log(error)
  });
