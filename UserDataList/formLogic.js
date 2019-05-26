

//var test = '071752456';

//var testInput = document.getElementById("displayMobile");
divMobile.addEventListener("blur", function() { 

var test = divMobile.value;

var phoneNum = /^(070|071|072|075|077|078)[0-9]{6}$/;    
// /^[0127]{3}[0-9]{6}$/


if(test.match(phoneNum)){
    
    return null;
} else {
    
    alert('Please enter a valid mobile number! Macedonian operators use some of the following prefixes: 070/071/072/075/077/078');
}
});

//var emailInput = document.getElementById("displayEmail");

divMail.addEventListener("blur", function () { 
    var mailValue = divMail.value;
var mail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

if(mailValue.match(mail)){
    return null;
} else {
    alert("Please enter a valid e-mail address!");
}


});