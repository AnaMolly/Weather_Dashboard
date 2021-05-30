var button = document.querySelector(".searchbutton")
var city = document.querySelector(".locationSearch")
var location = document.querySelector(".location")
var temp = document.querySelector(".temp")


var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=24877683e160be4d09b95f62d7d4489b"


fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })