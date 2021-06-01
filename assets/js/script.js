var searchButton = document.querySelector("#searchbutton")
var locationDisplay = document.querySelector(".location")
var tempDisplay = document.querySelector(".temp")
var dateDisplay1 = document.querySelector(".todays-date")
var windDisplay = document.querySelector(".wind")
var humidityDisplay = document.querySelector(".humidity")
var uvIndexDisplay = document.querySelector(".uv-index")
var iconDisplay1 = document.querySelector(".todays-icon")
var APIKey = "24877683e160be4d09b95f62d7d4489b"

function clearField(){
  var citySearch = document.querySelector("#locationSearch")
  citySearch.value = ""
}

function getWeather(){
  var city = document.querySelector("#locationSearch")

  
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&units=imperial&appid=" + APIKey 
  
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data)
      var locationDisplayValue = data.name;
      var dateDisplay1Unix = data.dt
      var dateDisplay1Value = moment.unix(dateDisplay1Unix).format(" MMM Do, YYYY" );
      var tempDislayValue = Math.floor((data.main.temp - 32) * 0.5556)
      var windDisplayValue = Math.floor(data.wind.speed * 1.6)
      var humidityDisplayValue = data.main.humidity
      
      locationDisplay.textContent = locationDisplayValue
      dateDisplay1.textContent = dateDisplay1Value
      tempDisplay.textContent = " " + tempDislayValue + "°C"
      windDisplay.textContent = windDisplayValue + " " + "km/h"
      humidityDisplay.textContent = humidityDisplayValue + "%"
      
      longitude = data.coord.lon
      latitude = data.coord.lat

      UVIndex(longitude,latitude)
    })
}

function UVIndex(longitude,latitude){
 
  var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude +"&units=imperial&appid=" + APIKey 
  
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
      uvIndexDisplay.textContent = data.current.uvi

      if(data.current.uvi <= 2){
        uvIndexDisplay.style.color = "darkgreen"
      } else if (data.current.uvi >= 8){
        uvIndexDisplay.style.color = "red"
      } else (uvIndexDisplay.style.color = "orange")

      
})
}


searchButton.addEventListener("click", function(){
  getWeather();
  clearField();
    
})