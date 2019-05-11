
      function txtAnimation() {
      $('.tlt').textillate({
          in: {effect: 'fadeIn', delay: 10},
          out: {effect: 'fadeOut', reverse: true},
         loop: true
      });
      var div = document.getElementById("loading");
    
  }
  window.addEventListener("load", function(){
      txtAnimation();
    
  }, false);
 