var APIKey = "24877683e160be4d09b95f62d7d4489b"
var city= "toronto"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  })