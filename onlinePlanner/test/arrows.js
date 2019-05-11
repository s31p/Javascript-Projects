
var arrowLeft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");


var urlParams2 = new URLSearchParams(window.location.search);

   function getUrlParameter(name) {
       name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
       var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
       var results = regex.exec(location.search);
       return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
     };
   
     console.log(urlParams2);
   
     console.log(getUrlParameter('date'));
     var currDate = getUrlParameter('date').split("/");
   

// currDate = currDate.map((elem)=> {
//     return parseInt(elem);
   
// })
// console.log(currDate);

// var startDate = new Date(currDate[2], currDate[1], currDate[0]);
// console.log(startDate);

// var myParagraph = "";

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

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(months[month2]);

var startDate = days[dayOfWeek] + " " + months[month2] + " " + day2 + " " + year2;
console.log(startDate);
var startDate2 = new Date(startDate);
console.log(startDate2);

var helper = '';
arrowRight.onclick = function() {
// startDate++;
// console.log(startDate);
var i = startDate2.valueOf() + 86400000;
startDate2 = new Date(i);
helper = startDate2.toDateString();
//document.getElementById("test").innerHTML = helper;

var f = new Date(helper);
var r = f.getMonth();
var monthParam = parseInt(r);
var dayParam = parseInt(f.getDate());
console.log(dayParam);
var yearParam = parseInt(f.getFullYear());

var date2 = [];
date2.push(dayParam, monthParam, yearParam);

console.log(date2);
window.location.replace("planner.html?date="+date2[0]+"/"+date2[1]+"/"+date2[2]);
};
console.log(startDate2.toDateString());
//console.log(startDate.toDateString());
arrowLeft.onclick = function() {
    var i = startDate2.valueOf() - 86400000;
startDate2 = new Date(i);
helper = startDate2.toDateString();
//document.getElementById("test").innerHTML = helper;

var f = new Date(helper);
var r = f.getMonth();
var monthParam = parseInt(r);
var dayParam = parseInt(f.getDate());
console.log(dayParam);
var yearParam = parseInt(f.getFullYear());

var date2 = [];
date2.push(dayParam, monthParam, yearParam);

console.log(date2);
window.location.replace("planner.html?date="+date2[0]+"/"+date2[1]+"/"+date2[2]);

}

// document.getElementById("up").onclick = function(){
//     var i = dataI.valueOf() + 86400000 ;
//     dataI = new Date( i);
//     document.getElementById("dateD").innerHTML =dataI.toDateString();
//     }
//     document.getElementById("down").onclick = function(){
//     var i = dataI.valueOf() - 86400000 ;
//     dataI = new Date( i);
//     document.getElementById("dateD").innerHTML =dataI.toDateString();
//     }
//     var dataI = new Date();
//     document.getElementById("dateD").innerHTML =dataI.toDateString();


