
var divName = document.getElementById("displayName");
var divMail = document.getElementById("displayEmail");
var divMobile = document.getElementById("displayMobile");
var enter= document.getElementById("enter");
const button2 = document.getElementById('clearAll');
var saveBtn = document.getElementById("saveAll");
const form = document.getElementById("myModal");
const displayData = document.getElementById("displayData");
const paragraph = document.getElementById("paragraph");

var itemsArray2 = [];
var tableDataRows = [];
var rowHeadings = document.createElement("tr");

var table = document.getElementById("table");
table.setAttribute("id", "table");
table.appendChild(rowHeadings);

rowHeadings.setAttribute("id", "headingsRow");

console.log(localStorage.getItem('items'))

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem('items'));



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
var id=0;
var counter= 0;

const tdMaker = text => {
   
    
   // const tr = $('<tr class="tableRowData"> <td class="one td"></td> <td class="two td"></td> <td class="three td"></td> <td class="four td"></td></tr>');
   const tr = document.createElement("tr");
   tr.setAttribute("class", "tableRowData");
    tr.setAttribute("id",text.id);
    // table.append(tr);
    var tdOne = document.createElement("td");
    tdOne.setAttribute("class", "one td");
   // tdOne.innerHTML = divName.value;
    var span1 = document.createElement("span");
    span1.innerHTML = text.name;
    tdOne.appendChild(span1);
    tr.appendChild(tdOne);

    var tdTwo = document.createElement("td");
    tdTwo.setAttribute("class", "two td");
//tdTwo.innerHTML = divMail.value;
var span2 = document.createElement("span");
    span2.innerHTML = text.email;
    tdTwo.appendChild(span2);
    tr.appendChild(tdTwo);

    var tdThree = document.createElement("td");
    tdThree.setAttribute("class", "three td");
    //tdThree.innerHTML = divMobile.value;
    var span3 = document.createElement("span");
    span3.innerHTML = text.mobileNo;
    tdThree.appendChild(span3);
    tr.appendChild(tdThree);
    var tdFour = document.createElement("td");
    tdFour.setAttribute("class", "four td");
    

const btn1 = document.createElement("button");
btn1.innerHTML = "Read";
btn1.setAttribute("class", "btn btn read tdBtn");

const btn2 = document.createElement("input");


btn2.setAttribute("type", "button");
btn2.setAttribute("class", "btn btn-success update tdBtn");
btn2.setAttribute("value", "Update");

const btn3 = document.createElement("input");

btn3.setAttribute("type", "button");
btn3.setAttribute("class", "btn btn-danger delete tdBtn");
btn3.setAttribute("value", "Delete");

tdFour.appendChild(btn1);
tdFour.appendChild(btn2);
tdFour.appendChild(btn3);




tr.appendChild(tdFour);

counter++;
table.appendChild(tr);
console.log(tr);
}




// var id=0;
enter.addEventListener("click", function() {
  

    if(divMail.value ==="" || divMobile.value === "" || divName.value ==="" ){
        alert("PLease fill in the form!");
        return false;
    }
    // var id=0;

    itemsArray.forEach(element => {
      if(itemsArray.length>0){
      id=element.id+1;
     
    }
   
});
window.location.reload();
    itemsArray.push({id:counter,name:divName.value, email:divMail.value, mobileNo: divMobile.value});
    console.log(itemsArray);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    tdMaker({name:divName.value, email:divMail.value, mobileNo: divMobile.value});
    divName.value = '';
    divMail.value = '';
    divMobile.value = '';
     console.log(itemsArray);
});


data.forEach(item => {
    console.log(item)
    
    tdMaker(item);
  })

  




  

  button2.addEventListener('click', function() {
    localStorage.clear();
    window.location.reload();
  });

 var d = $('#' + counter);
      $(".read").each(function (item){
 $(this).on("click", function(e){
    displayData.style.display = "block"; 
    
    $("tr").on("click", d, function(e){
  // localStorage.getItem('items');
    paragraph.innerHTML = (getValues(itemsArray[item].name, itemsArray[item].email, itemsArray[item].mobileNo));
    console.log(itemsArray);
    //const link = document.getElementById("link");
    $("#link").on("click", function() {
        displayData.style.display = "none"; 
        
    
    });
});
});
});



$(".delete").each(function() {
    
    $(this).on("click", function(e) {
    console.log(e.target);
    
  $("tr").on("click", d, function(e){
      e.preventDefault();
      console.log($(this),'TARGET');
      
     
  this.remove();
  console.log($(this))
//   itemsArray.splice(this.id, 1, this);
itemsArray.splice(this.id, 1, this);
  console.log(itemsArray.splice(this.id, 1));
  //d = $('#' + parseInt(counter +1));
  console.log($(this))
  
  if($(this).id == itemsArray[0].id){
    $(this).id += 1;
  }
      localStorage.setItem('items', JSON.stringify(itemsArray));

    
      window.location.reload();
     
      
    })
   console.log(itemsArray,'itemarray')
   });
   
  })

$(".update").each(function(elem){
    // $(this).on("click", function(e){
         $(".tableRowData").on("click", d, function(){
            console.log($(this))
             $(this).attr("contenteditable", "true");
       
     })
 })
//  $("#saveAll").click(function (e) {
//    $(".tableRowData").each(function(data2){

// //    itemsArray2[data2].push({id:counter,name:document.getElementsByClassName("one").textContent, email:document.getElementsByClassName("two").textContent, mobileNo: document.getElementsByClassName("three").textContent});
// //      console.log(itemsArray2);
// //        localStorage.setItem('items', JSON.stringify(itemsArray2));
// //        $(this).attr("contenteditable", "false");
//    });
// });
function getValues(a, b, c){
    
 return "First name: " + a + " E-mail: " + b+ " Mobile Number: "+ c+ ".";
  }

  function prepareForm() {
    form.onsubmit = function() {
        return false;
    }
}
  window.addEventListener("load", function() {

prepareForm();
  });