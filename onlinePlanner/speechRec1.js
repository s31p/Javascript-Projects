
// var message = document.getElementById("message");

// var speechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var speechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;


// var grammar = "#JSGF V1.0;";

// var recognition = new SpeechRecognition();

// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
// recognition.lang = 'en-US';
// recognition.interimResults = false;




// recognition.onresult = function(event) {
//     var last = event.results.length - 1;
//             var command = event.results[last][0].transcript;
//             message.textContent = 'Voice Input: ' + command + '.';
// if(command.toLowerCase() === "show me my events"){
//     document.getElementById("list").style.display = "block";
// }
// };

// recognition.onspeechend = function() {
//     recognition.stop();
// };

// recognition.onerror = function(event) {
//     message.textContent = "Error occured in recognition: " + event.error;
// };

// document.querySelector('#btnGiveCommand').addEventListener('click', function(){
//     recognition.start();
// });
// // onresult
// // onspeechend
// // onerror

//var myEvents2 = new SortingEvents();
 var audioVar = document.getElementById("audio");
// // audioVar.setAttribute("src", "");
// // audioVar.setAttribute("hidden", "true");
// // document.body.appendChild(audioVar);
// // audioVar.setAttribute("class", "speech");
// var spansText = [];
// var span1 = document.getElementsByClassName('span1');
var commands = {
    'hello': function() {
       // $('.list').show(1000);
       console.log('dobro e');
    //    url = "https://s3-ap-northeast-1.amazonaws.com/poodll-audioprocessing-out/CP/30/localhostuser/recordmp3online.com/poodll/poodllfile5cd5f70fb420b1.mp3";
    url = "https://s3-ap-northeast-1.amazonaws.com/poodll-audioprocessing-out/CP/30/localhostuser/recordmp3online.com/poodll/poodllfile5cd5fb0b3df921.mp3";
      
    
    $('#audio').attr('src', url).get(0).play();
    }, 'events': function() {
       // myEvents2.showEvents();
      //  $('#list').show(1000);
     //var text = $('#list').find('#listContent').text();

     $("#myEvents").trigger("click");
     var text = $('#list').find('#listContent').find('.span1').text();
    //  var text2 = 'hello';
    //  text2 = encodeURIComponent(text2);
    //  text = encodeURIComponent(text);
    //  console.log(text)
    //  var url = "http://translate.google.com/translate_tts?tl=en&q="+ text2 + "&client=tw-ob";
    //  $('#audio').attr('src', url).get(0).play();
// function callSpeechSynt() {
// var spans = document.getElementsByClassName("span1");
// for(let i=0; i< spans.length; i++){

//var text = spans[i].textContent;
text = text.toString().split("-");
text = text.toString().split(";");
console.log(text);
    // setTimeout(createSpeechSynt(text), 10000); 
    VoiceRSS.speech({
        key: '94dffba985eb4196ba4ba946b9b9cd2f',
        src: text,
        hl: 'en-us',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
//}
// }
// setTimeout(callSpeechSynt, 3000);   
    }, 'dismiss': function() {
        $('#list').hide(1000);
    }, 'next month': function() {
        $('.btnRight').trigger("click");
    }, 'previous month': function() {
        $('.btnLeft').trigger("click");
    }, 'current month': function() {
        window.location.reload();
    }, 'first' : function() {
        // $('td:contains("1")').trigger('click');
        $('td#1').trigger('click');
    }, 'today': function () {
        $('td.today').trigger('click');
    }, 'tomorrow': function() {
        // var tom = parseInt($('td.today').attr('id'));
        // console.log(tom);
        // tom = tom + 1;
        // $('td#' + tom).trigger('click');
        var tomorr = new Date();
        var dt = tomorr.getDate();
        console.log(dt);
        var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var startDate = days[tomorr.getDay()] + " " + months[tomorr.getMonth()] + " " + dt + " " + tomorr.getFullYear();
        var startDate2 = new Date(startDate);
        console.log(startDate2);
        var i = startDate2.valueOf() + 86400000;
startDate2 = new Date(i);
console.log(startDate2);
var date = startDate2.getDate() + "/"+ startDate2.getMonth() + "/"+ startDate2.getFullYear();
window.location.replace("test/planner.html?date="+date);

    }, 'yesterday': function() {
       
        var yest = new Date();
        var yt = yest.getDate();
        console.log(yt);
        var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var startDate = days[yest.getDay()] + " " + months[yest.getMonth()] + " " + yt + " " + yest.getFullYear();
        var startDate2 = new Date(startDate);
        console.log(startDate2);
        var i = startDate2.valueOf() - 86400000;
startDate2 = new Date(i);
console.log(startDate2);
var date = startDate2.getDate() + "/"+ startDate2.getMonth() + "/"+ startDate2.getFullYear();
window.location.replace("test/planner.html?date="+date);
    }
};

if (annyang){
    

    annyang.addCommands(commands);
    annyang.start();
}

//https://responsivevoice.org/api/
// function createSpeechSynt(par){
//     var msg = new SpeechSynthesisUtterance(par);
// return window.speechSynthesis.speak(msg);
// }