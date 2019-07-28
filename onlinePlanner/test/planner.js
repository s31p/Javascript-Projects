const enterBtn = document.getElementById("enter");
var urlParams = new URLSearchParams(window.location.search);
const ul = document.querySelector('ul');
const button = document.getElementById('clearAll');
const input = document.getElementById('modalText');
var p = document.getElementById("timeValue");
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
var newItemsArray2;

//https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
//https://davidwalsh.name/query-string-javascript

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
console.log(localStorage.getItem('items'))
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem('items'));



var countText = 0;
const liMaker = text => {
  const li = document.createElement('li');
  li.setAttribute("class", "listItems");
  var hoursDiv = document.createElement("div");
  hoursDiv.setAttribute("class", "hoursDiv");
  hoursDiv.style.cssText = "width: 10%; word-break: break-all; min-height: 50px; height: auto; display: flex; justify-content: center; align-items: center; color:#fff; text-shadow: 2px 2px #3d3d3d";
  hoursDiv.textContent = text.hour;
  textDiv = document.createElement("div");
  textDiv.setAttribute("class", "textField");
  textDiv.style.cssText = "width: 50%; word-break: break-all; min-height: 50px; height: auto; border-left: 3px solid #3d3d3d; display: flex; justify-content: flex-start; align-items: center; padding-left: 10px; color: #fff; text-shadow: 2px 2px #3d3d3d";
  textDiv.textContent = text.eventName;

  li.appendChild(hoursDiv);
  li.appendChild(textDiv);
  li.setAttribute('id', text.id);
  //li.textContent = text;
  const span = document.createElement("div");
  li.appendChild(span);
  span.style.cssText = "float: right; width: 40%; min-height: 50px; height: auto; margin-top: -6px; display: flex; justify-content: space-between; align-items: center";
  const addNote = document.createElement("input");
  addNote.setAttribute("type", "button");
  addNote.setAttribute("class", "btn btn-info accordion");
  addNote.value = "Add note";
  addNote.style.cssText = "width: 35%; font-size: 12px;"
  span.appendChild(addNote);

  console.log(localStorage.getItem('items'))
  const noteContainer = document.createElement("div");
  noteContainer.setAttribute("class", "panel");
  noteContainer.textContent = text.noteContent;

  li.appendChild(noteContainer);
  noteContainer.style.cssText = "width: 100%; min-height: 40px; height: auto; font-weight: normal; font-size: 18px; padding: 10px 10px 10px 10px; color: #fff; text-shadow: 2px 2px #3d3d3d; border-top: 3px solid #3d3d3d; display: flex; justify-content: center; align-items: center";
  noteContainer.setAttribute("contenteditable", true);

  const checkboxContainer = document.createElement("form");
  checkboxContainer.setAttribute("id", "checkboxContainer");
  span.appendChild(checkboxContainer);
  
  const tagDone = document.createElement("input");
  tagDone.setAttribute("id", "done");
  tagDone.setAttribute("type", "checkbox");

  tagDone.setAttribute("class", "done");
  tagDone.setAttribute("name", "radio");
  if (text.done != undefined && text.done === 1) {
    tagDone.setAttribute("checked", "true");
    tagDone.setAttribute("value", text.done);
    textDiv.setAttribute("class", "textField done2");


  } else {
    tagDone.setAttribute("value", 0);
  }

  const labelDone = document.createElement("label");
  labelDone.setAttribute("for", "done");
  labelDone.setAttribute("id", "done2");
  labelDone.innerText = "Done!";
  checkboxContainer.appendChild(tagDone);
  checkboxContainer.appendChild(labelDone);
  console.log(countText, 'texttt')
  const delLink = document.createElement("a");
  
  delLink.setAttribute("class", "delLink");
  delLink.setAttribute("href", "#");
 
  span.appendChild(delLink);
  delLink.innerText = "X";


  
  countText++;
  ul.appendChild(li);
}







var noteContent2 = document.getElementsByClassName('panel');
var id = 0;


if (itemsArray.length > 0) {
  id = Math.max.apply(Math, itemsArray.map(function (o) { return o.id; }));

}
enterBtn.addEventListener('click', function () {
  if(input.value === '' || p.innerText === ''){
    alert("Choose an hour and enter event name");
    return false;
  }


  id++;

  itemsArray.push({
    id: id, date: getUrlParameter('date'), hour: p.innerText, eventName: input.value,
    noteContent: noteContent2.innerText, done: 0
  });

  console.log(itemsArray)

  itemsArray = itemsArray.sort(function (a, b) {
    console.log(a.hour)
    return a.hour.split(":")[1] - b.hour.split(":")[1];

  });

  itemsArray = itemsArray.sort(function (a, b) {
    console.log(a.hour)

    return a.hour.split(":")[0] - b.hour.split(":")[0];

  });

  itemsArray = itemsArray.sort(function (a, b) {
    return a.date.split("/")[0] - b.date.split("/")[0];
  });
  itemsArray = itemsArray.sort(function (a, b) {
    return a.date.split("/")[1] - b.date.split("/")[1];
  });
  itemsArray = itemsArray.sort(function (a, b) {
    return a.date.split("/")[2] - b.date.split("/")[2];
  });

  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker({ hour: p.innerText, eventName: input.value, noteContent: noteContent2.innerText, done: 0 });
  console.log(p.innerText)
  p.innerText = '';
  input.value = '';
  window.location.reload();
});










data.forEach(item => {
  console.log(item)
  if (item.date == getUrlParameter('date')) {
    liMaker(item);
    if (item) {
      document.getElementById('helperDiv').style.display = 'none';
    }

  }
})




$('.done').each(function () {


  var $done = $(this).parent().parent().parent();
  console.log($done);
  $(this).on('click', function () {
    console.log((this));
    var buttonval;
    var $textItem4 = $(this).parent().parent().parent();

    if (this.checked) {

        buttonval = 1; 
        $textItem4.find('.textField').css("text-decoration","line-through");

    } else {
      buttonval = 0;
      $textItem4.find('.textField').css("text-decoration","none");


    }



    

    console.log($textItem4);
    var myId4 = $textItem4[0].getAttribute('id');
    console.log(myId4);
    var pos4 = itemsArray.map(function (e) { return e.id; }).indexOf(parseInt(myId4));
    
    itemsArray[pos4].done = buttonval;
    
    console.log(itemsArray)
    localStorage.setItem('items', JSON.stringify(itemsArray));

  });
});


function test(){
  $('.accordion').each(function () {
    console.log($(this));
    var $btnText = $(this).parent().parent();
    console.log($btnText);
    var $note = $(this).parent().parent().find('.panel');
    console.log($note);

    if ($note[0].innerText) {
       $(this).val('View note');
       
      $(this).css({ "color": "#bd2130", "font-weight": "bold" });
    } else {
      $(this).val('Add note');
      $(this).css({ "color": "#fff" });

    }

  })
}
$(document).ready(function () {
  $('.accordion').each(function () {
    console.log($(this));
    var $btnText = $(this).parent().parent();
    console.log($btnText);
    var $note = $(this).parent().parent().find('.panel');
    console.log($note);

    if ($note[0].innerText) {
       $(this).val('View note');

      $(this).css({ "color": "#bd2130", "font-weight": "bold" });
    }

  })
});

$('.panel').each(function () {
  $(this).on('blur', function () {
    var $textItem3 = $(this).parent();
    console.log($textItem3);
    var myId3 = $textItem3[0].getAttribute('id');
    console.log(myId3);
    var pos3 = itemsArray.map(function (e) { return e.id; }).indexOf(parseInt(myId3));
    console.log(pos3);
    itemsArray[pos3].noteContent = $textItem3.find('.panel').text();
    localStorage.setItem('items', JSON.stringify(itemsArray));
  })
})


$('.textField').each(function () {
  var $textItem = '';
  $(this).on('click', function (e) {
    console.log(e.target);

    $textItem = $(this).parent().find('.textField');
    console.log($(this).parent());
    $textItem.attr('contenteditable', true);
  })

})

$('.textField').each(function () {
  $(this).on('blur', function (e) {
    console.log(e.target);
    var $textItem2 = $(this).parent();
    console.log($textItem2)
    $textItem2.find('.textField').attr('contenteditable', false);

    var myId2 = $textItem2[0].getAttribute('id');
    console.log($textItem2)
    var pos2 = itemsArray.map(function (e) { return e.id; }).indexOf(parseInt(myId2));
    console.log(pos2);
    itemsArray[pos2].eventName = $textItem2.find('.textField').text();
    localStorage.setItem('items', JSON.stringify(itemsArray));
  })
})


$(".delLink").on("click", function (e) {
  console.log(e.target)
  var $deletedItem = $('#myList').find($(this).parent().parent());

  var myId = $deletedItem[0].getAttribute("id");
  console.log(myId)
  $deletedItem.remove();
  pos = itemsArray.map(function (e) { return e.id; }).indexOf(parseInt(myId));

  console.log(pos)

  itemsArray.splice(pos, 1);
  console.log(itemsArray);

  console.log($deletedItem[0].getAttribute("id"));


  localStorage.setItem('items', JSON.stringify(itemsArray));



  itemsArray = itemsArray.filter(value => Object.keys(value).length > 1);
  localStorage.setItem('items', JSON.stringify(itemsArray));
if(document.getElementsByClassName("listItems").length <= 0){
  document.getElementById('helperDiv').style.display = "block";
 
}
  console.log(itemsArray, 'itemarray')
})








var acc = document.getElementsByClassName("accordion");
var i;

var panels = document.getElementsByClassName("panel");
for (var index = 0; index < panels.length; index++) {
  panels[index].style.display = "none";
  panels[index].style.overflow = "hidden";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    // var panel = this.nextElementSibling;
    console.log(this.parentElement)
    console.log($(this).parent().parent().find('div.panel'));
    var panel = $(this).parent().parent().find('div.panel');
    console.log(panel)
    if (panel[0].style.display === "block") {
      panel[0].style.display = "none";
   
   test();
    } else {
      panel[0].style.display = "block";
    }
    
  });
}




button.addEventListener('click', function () {
  
  data.forEach(item => {
    console.log(item)
    if (item.date == getUrlParameter('date')) {
      $('li').remove();
      console.log(itemsArray);
      console.log(item);
      var item2 = item.id;
      console.log(item2);
      posItem = itemsArray.map(function (e) { return e.id; }).indexOf(parseInt(item2));

      console.log(posItem);
      itemsArray.splice(posItem, 1);
      
      localStorage.setItem('items', JSON.stringify(itemsArray));
    }
  });
  document.getElementById('helperDiv').style.display = 'block';
})




  


