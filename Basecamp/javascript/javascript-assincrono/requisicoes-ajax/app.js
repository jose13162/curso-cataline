var button = document.querySelector("div#app button");

button.addEventListener("click", function () {
  var xhr = new XMLHttpRequest()

  xhr.open("get", "https://api.github.com/users")
  xhr.send()

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText)
      console.log(data[0].login)
    }
  }
});
