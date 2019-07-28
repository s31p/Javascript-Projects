
// var getWordIntoText = annyang.getSpeechRecognizer();

// console.log(getWordIntoText);

// var date = new Date(getWordIntoText);


// console.log(date);




var recognition = annyang.getSpeechRecognizer();
  var final_transcript = '';
  recognition.interimResults = true;
    recognition.onresult = function(event) {
    var interim_transcript = '';
    final_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
            console.log("final_transcript="+final_transcript);
            annyang.trigger(final_transcript); //If the sentence is "final" for the Web Speech API, we can try to trigger the sentence
        } else {
            interim_transcript += event.results[i][0].transcript;
            console.log("interim_transcript="+interim_transcript);
        }
    }

    //document.getElementById('123').innerHTML =  'interim='+interim_transcript+'<br/>final='+final_transcript;
    console.log('interim='+interim_transcript+'|final='+final_transcript);
    var date = final_transcript;
    // var month = final_transcript.toString().split(" ")[0];
    // console.log(month);
    var date2 = Date.parse(date);
    //var date2 = new Date(date);
    console.log(date2);
    var month = date2.getMonth();
    console.log(month);
    var day = date2.getDate();
    var year = date2.getFullYear();

    var dateFinal = day+"/"+month+"/"+year;
    console.log(dateFinal);
    var commands3 = {
          'open': function() {
           // console.log("Yey");
          // clickDate(dateFinal);
          window.location.replace("test/planner.html?date="+dateFinal);
        }, 
    };

    if(annyang){
        annyang.addCommands(commands3);
        annyang.start();
    
    }
    
    
  };

  //console.log(dateFinal);


