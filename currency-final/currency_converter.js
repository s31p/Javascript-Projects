function convertCurrency()
{
var xmlhttp = new XMLHttpRequest();
var url = "http://data.fixer.io/api/latest?access_key=c586da1b3647ab3e3c9ee74e3a225974&format=1&symbols";
xmlhttp.open("GET", url, true);
xmlhttp.send(null);

xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
{
	
var result = xmlhttp.responseText;

var fromvalue = document.getElementById("from").value;
var tovalue = document.getElementById("to").value;
var jsResult = JSON.parse(result);
var oneUnit = jsResult.rates[tovalue]/jsResult.rates[fromvalue];
var amt = document.getElementById("fromAmount").value;
document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);
}
}
}