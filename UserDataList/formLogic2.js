var divName = document.getElementById("displayName");
var divMail = document.getElementById("displayEmail");
var divMobile = document.getElementById("displayMobile");
var enter= document.getElementById("enter");
var button2 = document.getElementById('clearAll');
var saveBtn = document.getElementById("saveAll");
var form = document.getElementById("myModal");
var displayData = document.getElementById("displayData");
var paragraph = document.getElementById("paragraph");
var link = document.getElementById("link");
this.itemsArray2 = [];
this.tableDataRows = [];



divMobile.addEventListener("blur", function() { 

    //var test = divMobile.value;
    
    var phoneNum = /^(070|071|072|075|077|078)[0-9]{6}$/;    
    // /^[0127]{3}[0-9]{6}$/
    
    
    if((divMobile.value).match(phoneNum)){
        
        return null;
    } else {
        
        alert('Please enter a valid mobile number! Macedonian operators use some of the following prefixes: 070/071/072/075/077/078');
    }
    });
    
   
    
    divMail.addEventListener("blur", function () { 
       // var mailValue = divMail.value;
    var mail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    if((divMail.value).match(mail)){
        return null;
    } else {
        alert("Please enter a valid e-mail address!");
    }
    
    
    });

    this.rowHeadings = document.createElement("tr");






    this.table = document.getElementById("table");
    this.table.setAttribute("id", "table");
    this.table.appendChild(rowHeadings);

    this.rowHeadings.setAttribute("id", "headingsRow");

// console.log(localStorage.getItem('items'))

// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));

// const data = JSON.parse(localStorage.getItem('items'));



var tHeadings;
var headings = ["Name", "Email Address", "Mobile Number", "Action"];
for (let i =0; i < headings.length; i++){
     tHeadings  = document.createElement("th");
    tHeadings.textContent = headings[i];
    tHeadings.style.cssText="border: 1px solid grey; width: calc(100%/4)";
   
    rowHeadings.appendChild(tHeadings);

    if(i === 3){
        const btnAddContent = document.createElement("button");
btnAddContent.setAttribute("data-toggle", "modal");
btnAddContent.setAttribute("data-target", "#myModal");
btnAddContent.setAttribute("id", "modal");
btnAddContent.setAttribute("class", "btn btn-primary");
btnAddContent.textContent = "Add Content";
btnAddContent.style.cssText = "float: right; height: 100%";
tHeadings.appendChild(btnAddContent);
    }
}

// this.id=0;
// this.counter= 0;

// this.buttons = function() {
// const btn1 = document.createElement("button");
// btn1.innerHTML = "Read";
// btn1.setAttribute("class", "btn btn read tdBtn");

// const btn2 = document.createElement("input");


// btn2.setAttribute("type", "button");
// btn2.setAttribute("class", "btn btn-success update tdBtn");
// btn2.setAttribute("value", "Update");

// const btn3 = document.createElement("input");

// btn3.setAttribute("type", "button");
// btn3.setAttribute("class", "btn btn-danger delete tdBtn");
// btn3.setAttribute("value", "Delete");
// };


// this.enter.addEventListener("click", function() {
// var myArray = [{id:this.counter, name: "Lisa", email: "lisa@gmail.com", mobileNo: 071222222, myBtns: buttons()}, 
// {id:this.counter, name: "Tom", email: "tom@gmail.com", mobileNo: 078111111, myBtns: buttons}];



// });




