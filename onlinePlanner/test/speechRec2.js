


// var getWordIntoText = annyang.getSpeechRecognizer();

// console.log(getWordIntoText);

// var date = new Date(getWordIntoText);


// console.log(date);




// var recognition = annyang.getSpeechRecognizer();
//   var final_transcript = '';
//   recognition.interimResults = true;
//     recognition.onresult = function(event) {
//     var interim_transcript = '';
//     final_transcript = '';
//     for (var i = event.resultIndex; i < event.results.length; ++i) {
//         if (event.results[i].isFinal) {
//             final_transcript += event.results[i][0].transcript;
//             console.log("final_transcript="+final_transcript);
//             annyang.trigger(final_transcript); //If the sentence is "final" for the Web Speech API, we can try to trigger the sentence
//         } else {
//             interim_transcript += event.results[i][0].transcript;
//             console.log("interim_transcript="+interim_transcript);
//         }
//     }

//     //document.getElementById('123').innerHTML =  'interim='+interim_transcript+'<br/>final='+final_transcript;
//     console.log('interim='+interim_transcript+'|final='+final_transcript);
//     var date = final_transcript;
//     // var month = final_transcript.toString().split(" ")[0];
//     // console.log(month);
//     var date2 = Date.parse(date);
//     console.log(date2);
//     var month = date2.getMonth();
//     console.log(month);
//     var day = date2.getDate();
//     var year = date2.getFullYear();

//      dateFinal = day+"/"+month+"/"+year;
//     console.log(dateFinal);
   
   
    
    
  

//   //console.log(dateFinal);









var commands2 = {
    'hello': function() {
       // $('.list').show(1000);
       console.log('dobro e');
alert("all good");

    }, 'next day': function() {
    $('#arrowRight').trigger("click");
    }, 'previous day': function() {
        $('#arrowLeft').trigger("click");
        }, 'read my events': function() {
          //  var items = document.getElementsByClassName("textField");
          //  for(let i = 0; i < items.length; i++){
              var hours = document.getElementsByClassName('hoursDiv');
              var text2 = [];
              var eventText = document.getElementsByClassName("textField");
              
            for(let i = 0; i < hours.length; i++){
               
                var evText = eventText[i].textContent + ";";
                var text = hours[i].textContent + ";";
                console.log(text);
                text2.push(text+" "+ evText);
                console.log(text2);
                
         //   }
        }
        console.log(text2);
           // }
           VoiceRSS.speech({
            key: '94dffba985eb4196ba4ba946b9b9cd2f',
            src: text2,
            hl: 'en-us',
            r: 0, 
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
    }
        // }, 'open': function() {
        //     // console.log("Yey");
        //     window.location.replace("planner.html?date="+dateFinal);
        // }
};

if (annyang){
    

    annyang.addCommands(commands2);
    annyang.start();
}
//};