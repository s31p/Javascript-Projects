
function createData(id, name, email, mobileNo){
    this.id = id;
    this.name = name;
    this.email = email;
    this.mobileNo = mobileNo;
   
}

var myArray = [];
var counter = 1;


enter.addEventListener("click", function() {
    if(divMail.value ==="" || divMobile.value === "" || divName.value ==="" ){
        alert("PLease fill in the form!");
        return false;
    }
    counter++;
    var x = new createData(counter, divName.value, divMail.value, divMobile.value);
     tdMaker(x);
     console.log(x);
  divName.value = "";
  divMail.value = "";
  divMobile.value = "";
     });
     

    

     $("#saveAll").on("click", function() { 
     var editable_elements = document.querySelectorAll("[contenteditable=true]");
     for(var i=0; i<editable_elements.length; i++){
         editable_elements[i].setAttribute("contenteditable", "false");
     }
    });
const tdMaker = text => {
   
    
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
 
 
 table.appendChild(tr);
 console.log(tr);
 var $btns = $(".delete");
 console.log($btns)
 $btns.on("click", function(e) {
     console.log(e.target)
 $("table").find($(this).parent().parent()).remove();
 }) 
 


 $(".read").each(function (item){
    $(this).on("click", function(e){
       displayData.style.display = "block"; 
       displayData.style.padding = "10px 10px 0 5px";

      var $f = $("table").find($(this).parent().parent());
console.log($f);

       $("tr").on("click", $(this.id), function(e){
           
       console.log(item)
       paragraph.innerHTML = "<b>First Name: </b>" + $f.find(".one").text() + "</br>" + "<b>E-mail: </b>" +$f.find(".two").text() + "</br>"+ "<b>Mobile Number: </b>" + $f.find(".three").text();
    
       $("#link").on("click", function() {
           displayData.style.display = "none"; 
           
       
       });
   });
   });
   });


   


$(".update").each(function(){ 
    $(this).on("click", function(e){
        
console.log(e.target)
    var $f = $("table").find($(this).parent().parent());
 console.log($f);
 $f.find(".one").attr("contenteditable", true);
 $f.find(".two").attr("contenteditable", true);
 $f.find(".three").attr("contenteditable", true);
});
});

}



var lisa = new createData(0, "Lisa", "lisa@gmail.com", "071222222");
tdMaker(lisa);

var tom = new createData(1, "Tom", "tom@gmail.com", "072555555");
tdMaker(tom);


button2.addEventListener('click', function() {
    $("table").find(".tableRowData").remove();
  });



//   var $input = $('<input type="text" style="width:100%; height: 2.4em" class="input"/>');
//    $(".update").each(function(item2){ 
//    $(this).on("click", function(e){
       
// console.log(e.target)
//       var $f = $("table").find($(this).parent().parent());
// console.log($f)
//     $(".tableRowData").on("mousedown", $(this), function(e){
//     console.log($f.find(".one").find("span").text());
//    //var $inpVal = $f.find(".one").find("span").text();
//    $f.find(".one").find("span").hide();
//    $input.attr("value", $(this).find(".one").find("span").text());
//         $f.find(".one").append($input)[item2];
//     })
//     $(".tableRowData").on("blur", $(this), function(e){  
   
//    $inpVal = $(".input").val();
//    console.log($inpVal)
//  //  $input.hide();
//  $f.find(".one").find("span").show();
//  $f.find(".one").find("span").text($inpVal);
//  $(".input").remove();
// //  $f.find(".one").find("span").show();

//     })
    //   })
    // })