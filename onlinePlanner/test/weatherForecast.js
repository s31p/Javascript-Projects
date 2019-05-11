window.onload = () => {
   // document.body.style.backgroundImage = "url(images/clear.jpg)";
   
   var urlParams2 = new URLSearchParams(window.location.search);

   function getUrlParameter(name) {
       name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
       var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
       var results = regex.exec(location.search);
       return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
     };
   
     console.log(urlParams2);
   
     console.log(getUrlParameter('date'));
     var currDate = getUrlParameter('date');
   console.log(currDate);
   
  //  var ipUrl = "https://ipinfo.io/json";
   let lat;
   let long;

  //  fetch(ipUrl).then(response => {
  //   return response.json();
  //   }).then(data => {
  //   console.log(data, "s");
  //    lat = data.loc.split(",")[0];
  //    long = data.loc.split(",")[1];
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

    // let location = data.city +", "+ data.region;
     const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=544b291061854d8ef9f51d499e0464c6&units=metric`;
     
     
     fetch(api).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
console.log(data.list, "k");
var forecast = data.list;
// var date2 = data.list.dt_txt;
// console.log(date2)

forecast.forEach(day => {
  //  let date = new Date(day.dt * 1000);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    // let name = days[date.getDay()];

    // console.log(date);
    
    console.log(day.dt_txt);
    var weatherDate = day.dt_txt;
    console.log(weatherDate)
var weatherDate2 = weatherDate.split(" ")[0];
var weatherHour = weatherDate.split(" ")[1];
console.log(weatherHour)
// var weatherHour = weatherDate.forEach(hour => {
//   hour.split(" ")[1];
// })
// console.log(weatherHour)
console.log(weatherDate2)

    var date2 = new Date(day.dt_txt);
console.log(date2)
var weather2 = day.weather[0].main;
var description = day.weather[0].description;
console.log(weather2);
console.log(description);

var description2 = description.charAt(0).toUpperCase() + description.slice(1);
// var description3 = description2[0].split('');

var wind = day.wind.speed;
console.log(wind);

var temperature = day.main.temp;
console.log(temperature);
var weatherIcon = day.weather[0].icon;

var currDate2 = currDate.split('/');
console.log(currDate2);
currDate2 = currDate2.map(item => {
  return parseInt(item);
})
currDate2[1] += 1;

console.log(currDate2);
var weatherDate3 = weatherDate2.split('-').reverse();

weatherDate3 = weatherDate3.map(element => {
 return parseInt(element);
})
console.log(weatherDate3);
if(currDate2[0]== weatherDate3[0]&&currDate2[1]== weatherDate3[1]&&currDate2[2]== weatherDate3[2]){
  console.log("ggg")
 // document.getElementById('weatherContainer').innerHTML=weather2 + "-" + description+"\n";

 document.getElementById("loading").style.display = "none";
  var fragment = document.createDocumentFragment();
  // weatherHour.forEach(hour=> {
  //   var hoursContainer = document.createElement("div");
  //   hoursContainer.innerHTML = weather2 + " "+ description;
  // }) 
  var hoursContainer = document.createElement("div");
  
  var icon = document.createElement('img');
  // hoursContainer.appendChild(icon);
  for(let i=0; i < weatherHour.length; i++){
    // var hoursContainer = document.createElement("div");
    hoursContainer.style.cssText = "width: calc(100%/4)";
    hoursContainer.innerHTML = weatherHour.split(":")[0] + " h" + "</br>" +"Wind: " + parseInt(wind) + "km/h"+"</br>"+ description2 + "</br>" + parseInt(temperature)+"&#8451;";
    icon.src= "http://openweathermap.org/img/w/"+ weatherIcon+".png";
    hoursContainer.appendChild(icon);
    fragment.appendChild(hoursContainer);
  }
 // hoursContainer.style.cssText = "color: #fff; text-shadow: 2px 2px #3d3d3d";
  document.getElementById("weatherContainer").appendChild(fragment);
 } 
//  else {
//   document.getElementById('weatherContainer').innerHTML = "Loading...";
//  }
console.log(day.list)
//console.log(obj2.f)
//console.log(weather2);
// var myDiv = document.createElement("div");
// document.body.appendChild(myDiv);
//myDiv.textContent = date2+ " " + weather2 + "-" + description+"\n";
// let dayBlock = document.createElement("div");
// document.body.appendChild(dayBlock);
//    // dayBlock.className = 'forecast__item';
//     dayBlock.innerHTML = `<div class="forecast-item__heading">${name}</div>
//       <div class="forecast-item__info"> <span class="degrees">${Math.round(day.list)}</span></div>`;
console.log(currDate.split('/'));
console.log(weatherDate2.split('-').reverse());
  });

    }).catch(function(err) {
      console.log(err.message);
      document.getElementById('loading').style.display = "block";
    }); //data



  
  })

    
}

};

//https://jsfiddle.net/sceendy/nea4z7ff/?utm_source=website&utm_medium=embed&utm_campaign=nea4z7ff
//https://sceendy.com/blog/2017/09-27-weather-widget-tutorial/