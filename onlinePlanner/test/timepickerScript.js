var time2 = document.getElementById('time');

var timepicker = new TimePicker(['time', 'link'], {
  lang: 'en',
  theme: 'blue-grey',
});

this.value;
var p = document.getElementById("timeValue");
p.style.cssText = "font-size: 26px; font-weight: bold";

timepicker.on('change', function (evt) {
   
    this.value = (evt.hour || '00') + ':' + (evt.minute || '00');
  
    if (evt.element.id === 'link') {
      time2.value = this.value;
    } else {
      evt.element.value = this.value;
    }
    console.log(this.value, "h");
    console.log(evt);
    p.innerHTML = this.value;
  });
  