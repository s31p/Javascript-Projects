
//https://www.w3schools.com/jquery/jquery_filters.asp
//https://stackoverflow.com/questions/38525594/jquery-loop-go-back-to-the-first-element-when-reached-the-last-element-in-a-sli



// for myApp: 
//https://www.youtube.com/watch?v=dOr134BjHv0    js speech recognition
//https://www.youtube.com/watch?v=DOtkNxmg9QY   js txt to speech
function createData(id, name, email, mobileNo) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.mobileNo = mobileNo;

}

var myArray = [];
var counter = 1;


enter.addEventListener("click", function () {
    if (divMail.value === "" || divMobile.value === "" || divName.value === "") {
        alert("PLease fill in the form!");
        return false;
    }
    counter++;
    var x = new createData(counter, divName.value, divMail.value, divMobile.value);
    tdMaker(x);
    myArray.push(x);
    console.log(x);
    divName.value = "";
    divMail.value = "";
    divMobile.value = "";
});




$("#saveAll").on("click", function () {
    var editable_elements = document.querySelectorAll("[contenteditable=true]");
    for (var i = 0; i < editable_elements.length; i++) {
        editable_elements[i].setAttribute("contenteditable", "false");
    }
});
const tdMaker = text => {


    const tr = document.createElement("tr");
    tr.setAttribute("class", "tableRowData");
    tr.setAttribute("id", text.id);
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
    $btns.on("click", function (e) {
        console.log(e.target)
        $("table").find($(this).parent().parent()).remove();
    })



    $(".read").each(function (item) {
        $(this).on("click", function (e) {
            displayData.style.display = "block";
            displayData.style.padding = "10px 10px 0 5px";

            var $f = $("table").find($(this).parent().parent());
            console.log($f.length, 'table');
            // var rowCount = $('table tr').length;
            // console.log(rowCount)

            console.log($f, 'table')
            $("tr").on("click", $(this.id), function (e) {

         
var idCurr=this.id;
                paragraph.innerHTML = "<b>First Name: </b>" + $f.find(".one").text() + "</br>" + "<b>E-mail: </b>" + $f.find(".two").text() + "</br>" + "<b>Mobile Number: </b>" + $f.find(".three").text();
                var countRow = 0;
                $("#right").on("click", function (e) {
            //        countRow++;
                   // idCurr = e.target.parent().parent().find($(this.id));
                    var rowCount = $('#table tr').length - 1;
                    console.log($f, "kk")
                    var ids=parseInt(idCurr);
                  // var pos= myArray.indexOf(parseInt(this.id));
                //  var pos= myArray.findIndex(x => x.id === ids);
                //  console.log(pos);
                 console.log(ids);
                 if(rowCount>0){
                    //  var myId3 =$f[0].getAttribute("id");

                      $f = $f.next();
                      ids++;
                    //  console.log($("#table").children(':last-child()'));
                      countRow++;
                    //  console.log(myId3);
                 
                  //    var pos3 = te[0].map(function(e) { return e.id; }).indexOf(parseInt(myId3));
                      //$("table").find($(this).parent().parent()).next();
                  }
                   if(countRow==rowCount)
                   {
                    $f = $("#table").children(':nth-child(2)');

 ids=0;
 countRow=0;
                   }
                   
                    
                    paragraph.innerHTML = "<b>First Name: </b>" + $f.find(".one").text() + "</br>" + "<b>E-mail: </b>" + $f.find(".two").text() + "</br>" + "<b>Mobile Number: </b>" + $f.find(".three").text();

                });

                $("#link").on("click", function () {
                    displayData.style.display = "none";


                });

            });
        });
        //    var b= document.createElement("button");
        //    var btnL = $("<button> Test</button>");
        // b.innerHTML=btnL;
        //    paragraph.appendChild(b);
    });





    $(".update").each(function () {
        $(this).on("click", function (e) {

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
myArray.push(lisa);
myArray.push(tom);

button2.addEventListener('click', function () {
    $("table").find(".tableRowData").remove();
});



$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#table tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});