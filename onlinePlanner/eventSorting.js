


var myEventList = JSON.parse(localStorage.getItem('items'));
console.log(myEventList);

var newDate = new Date();

// var today = new Date();

// var BigDay = new Date("December 25, 2018");
// var msPerDay = 24 * 60 * 60 * 1000;
// var timeLeft = (BigDay.getTime() - today.getTime());
// var e_daysLeft = timeLeft / msPerDay;
// var daysLeft = Math.floor(e_daysLeft);
// var yearsLeft = 0;
// if (daysLeft > 365) {
//   yearsLeft = Math.floor(daysLeft / 365);
//   daysLeft = daysLeft % 365;
// }
// var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
// var hrsLeft = Math.floor(e_hrsLeft);
// var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
// document.write(yearsLeft + " years " + daysLeft + " days " + hrsLeft + " hours " + minsLeft + " minutes");

var compareDate = [];
var day = newDate.getDate();
var month = newDate.getMonth();
var year = newDate.getFullYear();
console.log(day + "."+ parseInt(month + 1)+ "." + year);
compareDate.push(parseInt(day), parseInt(month)+1, parseInt(year));
console.log(compareDate);

var eventBtn = document.getElementById('myEvents');
 var list = document.getElementById("list");
var listContent = document.getElementById('listContent');




eventBtn.addEventListener('click', function() {
     $('#list').show(1000);
//list.style.cssText = "position: absolute; width:40%; min-height: 150px; height: auto; margin-left: 16%; background: linear-gradient(to bottom left, rgba(61, 61, 61, 0.9) 30%, rgba(102, 0, 102, 0.9) 100%);";
// list.innerHTML = myEventList.forEach(element => {
//     element.hour + " " + element.eventName + "</br>";
// });

//list.css({"position": "absolute", "min-height": "150px", "height": "auto", "width": "40%", "margin-left": "20%", "background": "linear-gradient(to bottom left, rgba(61, 61, 61, 0.9) 30%, rgba(102, 0, 102, 0.9) 100%)"});


var fragment = document.createDocumentFragment();
for(let i =0; i< myEventList.length; i++){
    var span1 = document.createElement("span");
    span1.setAttribute("class", "span1");

    


    myEventList[i].date = myEventList[i].date.split("/");
    myEventList[i].date = myEventList[i].date.map( item => {
     return parseInt(item);
    });
    myEventList[i].date[1]+=1;
    console.log(myEventList[i].date);
   
    var BigDay = new Date(myEventList[i].date[2], parseInt(myEventList[i].date[1]) -1, parseInt(myEventList[i].date[0]) +1 );
        console.log(BigDay);
        var msPerDay = 24 * 60 * 60 * 1000;
        var timeLeft = (BigDay.getTime() - newDate.getTime());
        var e_daysLeft = timeLeft / msPerDay;
        var daysLeft = Math.floor(e_daysLeft);
        var yearsLeft = 0;
if (daysLeft > 365) {
  yearsLeft = Math.floor(daysLeft / 365);
  daysLeft = daysLeft % 365;
}
//var monthsLeft = parseInt((e_daysLeft - daysLeft) / 12);
var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
var hrsLeft = Math.floor(e_hrsLeft);

//if(yearsLeft == 0)  {
    if(myEventList[i].date[0] === compareDate[0] && myEventList[i].date[2] === compareDate[2] && myEventList[i].date[1] === compareDate[1]) {
        span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", (today)"+ ";"+ "</br>";
               
    } else if (daysLeft ==1) { 
        span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", ("+daysLeft + " day left)"+ ";"+ "</br>";
              
    } else if(myEventList[i].date[0] >= compareDate[0] && myEventList[i].date[2] === compareDate[2] && myEventList[i].date[1] === compareDate[1]) {
        
    
                span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", ("+daysLeft + " days left)"+ ";"+ "</br>";
                } else if(myEventList[i].date[2] === compareDate[2] &&myEventList[i].date[1] > compareDate[1]){
            
                    span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", ("+daysLeft + " days left)"+";"+"</br>";
                
                } else if(myEventList[i].date[2] > compareDate[2]) {
                    span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", ("+daysLeft + " days left)"+";"+"</br>";
                
                }
            
//         } else {
//             var leapYears2 = [];
//             var tmp = 0;
//             if(parseInt(myEventList[i].date[2]) % 4 ===0){
//                  tmp--;
//                 // console.log(daysLeft);
//                 // console.log(tmp);
//                 // daysLeft = parseInt(daysLeft) + tmp;
//                 var leapYears = (parseInt(myEventList[i].date[2]) % 4 ===0);
//                  console.log(leapYears);
//                leapYears2.push(leapYears);
//                console.log(leapYears2.length);
//                span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", ("+ yearsLeft + " years, " + daysLeft[tmp] + " days left)"+"</br>";
    
// }
// if(myEventList[i].date[0] >= compareDate[0] && myEventList[i].date[2] === compareDate[2] && myEventList[i].date[1] === compareDate[1]) {
        
    
    
//     span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", ("+ yearsLeft + " years, " + daysLeft + " days left)"+ "</br>";
//     } else if(myEventList[i].date[2] === compareDate[2] &&myEventList[i].date[1] > compareDate[1]){

//         span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", ("+ yearsLeft + " years, " + daysLeft + " days left)"+"</br>";
    
//     } else if(myEventList[i].date[2] > compareDate[2]) {
//         span1.innerHTML = myEventList[i].date.join(".") + "- "+myEventList[i].hour +", "+ myEventList[i].eventName + ", ("+ yearsLeft + " years, " +daysLeft + " days left)"+"</br>";
    
//     }
      //  }
   // listContent.innerHTML = myEventList[i].hour +" "+ myEventList[i].eventName + "</br>";
   fragment.appendChild(span1);
}
//}
listContent.appendChild(fragment);





});

 




     
var removeLink = document.getElementById("removeLink");


// removeLink.addEventListener("click", function() {
//     list.style.cssText = "display: none";
// })

$('#removeLink').click(function() {
    $('#list').hide(1000);
})





