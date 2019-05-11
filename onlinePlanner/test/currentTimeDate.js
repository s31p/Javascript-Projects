this.dateTime = () => {
var urlParams2 = new URLSearchParams(window.location.search);

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  console.log(urlParams2)

  console.log(getUrlParameter('date'));
    var myParagraph = "";

    var [day2, month2, year2] = getUrlParameter('date').split('/');
var obj2 = {f: new Date(year2, month2, day2)};
 console.log(obj2.f.getDay());
 var dayOfWeek = obj2.f.getDay();
 console.log(obj2.f.toLocaleDateString());
//     this.f = new Date();
    //this.f.setDate(getUrlParameter('date').split("/")[0]);
    //this.f.setMonth(getUrlParameter('date').split("/")[1]);
    // console.log(f);
    // console.log(f.getDay());
    console.log(day2);
    console.log(month2);
    console.log(year2);
    console.log(dayOfWeek);
    
//     this.f.setDate = getUrlParameter('date').split("/")[0];
// this.f.setMonth = getUrlParameter('date').split("/")[1];
// this.f.setFullYear = getUrlParameter('date').split("/")[2];
// console.log(this.setMonth);
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[month2]);

//     this.now = new Date();
//this.date = getUrlParameter('date');

// console.log(f);
// console.log(f.getDay());
// this.f.setDay = getUrlParameter('date').split("/").join(" ");
//console.log(this.f.getDay(getUrlParameter('date').split("/").join(" ")));
//console.log(this.f.setDay)
//     this.minutes = (this.now.getMinutes() < 10? '0' : '') + this.now.getMinutes();
//     this.seconds = (this.now.getSeconds() < 10? '0' : '') + this.now.getSeconds();
    
//     this.hours = (this.now.getHours() < 10? '0' : '') + this.now.getHours();
//     this.amPm = (this.hours >= 12) ? "PM" : "AM";
//     this.hours = this.hours % 12;
//    this.hours = this.hours ? this.hours : 12; // the hour '0' should be '12'
if(getUrlParameter('date').split("/")[0] == 1){
    myParagraph += days[dayOfWeek]+ "- " + months[month2]+ " "+day2+"st" +", "+ year2;  
    
} else if(getUrlParameter('date').split("/")[0] == 2){
    myParagraph += days[dayOfWeek]+ "- " + months[month2]+ " "+day2+"nd" +", "+ year2;  
   
} else if(getUrlParameter('date').split("/")[0] == 3){
    myParagraph += days[dayOfWeek]+ "- " + months[month2]+ " "+day2+"rd" +", "+ year2;  
   
} else {
    myParagraph += days[dayOfWeek]+ "- " + months[month2]+ " "+day2+"th" +", "+ year2;  
}
    //this.days[this.now.getDay()] + " || " + this.now.getDate() + " " + this.months[this.now.getMonth()] + " " + this.now.getFullYear() + " " + this.hours +":" + this.minutes + " "+ this.amPm;
    // + ":" + this.seconds
    $("div#todaysDateTime").text(myParagraph);
    $("div#todaysDateTime").css({"fontSize":"3em", "color": "#fff","textShadow": "3px 3px #3d3d3d", "text-align": "center", "line-height":"35px", "font-family": "'Pacifico', cursive"});
    // var newD = new Date(getDay(getUrlParameter('date')));
    // var newD2 = newD.getDay();
    // console.log(newD2);

    
    // f2 = f.getDate() + " " + f.getMonth() + " "+ f.getFullYear();
    // console.log(f2);
}

//window.onload= function () { 
this.dateTime();
// setInterval(this.dateTime, 1000);
// };


