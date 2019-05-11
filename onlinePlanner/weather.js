window.onload = () => {
     document.body.style.backgroundImage = "url(images/clear.jpg)";
    //  var ipUrl = "http://localhost/json.json";
    // var ipUrl = "json.json";
    // let lat;
    // let long;
    let icon = document.getElementById("img");

// fetch(ipUrl).then(response => {
// return response.json();
// }).then(data => {
// console.log(data, "s");
//  lat = data.loc.split(",")[0];
//  long = data.loc.split(",")[1];
//  let location = data.city +", "+ data.region;
  
// })
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

//const proxy = "https://cors-anywhere.herokuapp.cpm/";
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=544b291061854d8ef9f51d499e0464c6&units=metric`;
  
  fetch(api).then(response => {
      return response.json();
  }).then(data => {
      console.log(data);
      let location = data.name;
      let weatherData = $("#weather");
     
      let wind = data.wind.speed;
      console.log(wind);
      let weatherInfo = parseInt(data.main.temp);
     
      console.log(weatherInfo,"k");
   
      const data2 = data.weather[0].main;
      console.log(data2, "p");
      switch(data2){
          case 'Clouds':
          document.body.style.backgroundImage = "url(images/clouds3.jpg)";
        
          break;
          case 'Clear': 
          document.body.style.backgroundImage = "url(images/clear3.jpg)";
       
          break;
          case 'Rain':
          case 'Drizzle': 
          document.body.style.backgroundImage = "url(images/rain2.jpg)";
       //rain2
          break;
          
          case 'Snow':
          document.body.style.backgroundImage = "url(images/snow.jpg)";
        
          break;
          case 'Thunderstorm':
          document.body.style.backgroundImage = "url(images/thunderstorm.jpg)";
        
          break;
          default:
          document.body.style.backgroundImage = "url(images/clear.jpg)";
        
          break;
      }
      icon.src = "http://openweathermap.org/img/w/"+ data.weather[0].icon+".png";
    
      weatherData.html("Weather information:" + "</br>"+ location + "</br>"+ weatherInfo+"&#8451;"+"</br>"+ data.weather[0].description+"</br>"+ "min: "+ parseInt(data.main.temp_min) +"&#8451;" +", "+"max: "+parseInt(data.main.temp_max) +"&#8451;"+ "</br>"+"Wind: "+ wind + " km/h");
 
    })
})
}
    } 
