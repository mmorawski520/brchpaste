var author = document.getElementById("author");
var title = "";
var password = "";
var note = "";
var calendar = "";
var currentPage = 0;
var amountOfPages = 0;
var PageAfterDelete = 0;
var hidden = false;
class Note {
  constructor(author, title, password, note, expiration_date) {
    this.author = author;
    this.title = title;
    this.password = password;
    this.note = note;
    this.expiration_date = expiration_date;
  }
  //getters
  get get_expiration_date() {
    return this.expiration_date
  }
  get get_author() {
    return this.author
  }
  get get_title() {
    return this.title
  }
  get get_password() {
    return this.password
  }
  get get_note() {
    return this.note
  }
  //setters
  set set_expiration_date(variable) {
    this.expiration_date = variable
  }
  set set_author(variable) {
    this.author = variable
  }
  set set_title(variable) {
    this.title = variable
  }
  set set_password(variable) {
    this.password = variable
  }
  set set_note(variable) {
    this.note = variable
  }

}
var ArrayForObjects = []
ArrayForObjects[currentPage] = new Note("", "", "", "")

function addNewObject() {
 
  author = document.getElementById("author").value;
  title = document.getElementById("title").value;
  password = document.getElementById("password").value;
  note = document.getElementById("note").value;
  expiration_date = document.getElementById("calendar").value;

  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("password").value = "";
  document.getElementById("note").value = "";
  document.getElementById("calendar").value = "";

  note = document.getElementById("note").value;
  title = document.getElementById("title").value;
  if (ArrayForObjects.indexOf(currentPage) === -1) {
    ArrayForObjects.push(new Note(author, title, password, note, expiration_date))
    
    currentPage += 1;
  }
  amountOfPages += 1;
   
  if (amountOfPages != 1) {
    $(".ButtonPanel").append("<li class='item' id='p" + amountOfPages + "' onclick='current(" + amountOfPages + ")'><img  onclick='deleteItem(" + amountOfPages + ")' src='cancel.png' height='33%'' width='auto' style='float:right;margin-top:0.2em;margin-right: 0.2em;'></li>")
  } else {
    $(".ButtonPanel").append("<li class='item' id='p" + amountOfPages + "' onclick='current(" + amountOfPages + ")'><img  onclick='deleteItem(" + 0 + ")' src='cancel.png' height='33%'' width='auto' style='float:right;margin-top:0.2em;margin-right: 0.2em;'></li>")
  }
  for (i = 0; i <= amountOfPages; i++) {
    if (i == amountOfPages) {
      $("#p" + i).css("background-color", "red");
    } else {
      $("#p" + i).css("background-color", "lime");
    }
  }
  document.getElementById("author").value = ""
  document.getElementById("title").value = ""
  document.getElementById("password").value = ""
  document.getElementById("note").value = ""
  document.getElementById("calendar").value = ""

  document.getElementById("title").value = ""
  currentPage = amountOfPages
 
  displayDataInForms()
}

function displayDataInForms() {
  try {
     
    document.getElementById("author").value = ArrayForObjects[currentPage].get_author;
    document.getElementById("title").value = ArrayForObjects[currentPage].get_title;
    document.getElementById("password").value = ArrayForObjects[currentPage].get_password;
    document.getElementById("note").value = ArrayForObjects[currentPage].get_note;
    document.getElementById("calendar").value = ArrayForObjects[currentPage].get_expiration_date;
  } catch (error) {
    document.getElementById("author").value = ""
    document.getElementById("title").value = ""
    document.getElementById("password").value = ""
    document.getElementById("note").value = ""
    document.getElementById("calendar").value = ""
  }


}

function prev() {
  if (currentPage > 0) {
    currentPage = currentPage - 1;
    displayDataInForms()
  }
}

function next() {
  if (currentPage < ArrayForObjects.length) {
    currentPage = currentPage + 1;
    if (ArrayForObjects.includes(currentPage)) {
      displayDataInForms()
    }
  }
}

function current(value) {
  
   
  currentPage = value
  for (i = 0; i <= ArrayForObjects.length; i++) {
    if (i == currentPage) {
      $("#p" + i).css("background-color", "red");
    } else {
      $("#p" + i).css("background-color", "lime");
    }

  }

  displayDataInForms()
    if(hidden==true){
      $(".main").show()
      hidden=false;
    }
}

function deleteItem(variable) {
   

  $("#p" + variable).remove()
  delete ArrayForObjects[variable]
  ArrayForObjects.splice(variable, variable)


  if(variable==currentPage){
    console.log('ready')
    $(".main").hide()
    hidden=true;
  }
}
$('.form').on('input', function(e) {
   

  try {
     
    ArrayForObjects[currentPage].set_title = document.getElementById("title").value;

    ArrayForObjects[currentPage].set_note = document.getElementById("note").value;
    for (i = 0; i < ArrayForObjects.length; i++) {
      ArrayForObjects[i].set_author = document.getElementById("author").value;
      ArrayForObjects[i].set_expiration_date = document.getElementById("calendar").value;
      ArrayForObjects[i].set_password = document.getElementById("password").value;
    }
    $("#p" + currentPage).html(document.getElementById("title").value + '<img onclick="deleteItem(' + amountOfPages + ')" src="cancel.png" height="33%" width="auto" style="float:right;margin-top:0.2em;margin-right: 0.2em;">');
     
  } catch (error) {
    ArrayForObjects[currentPage] = new Note("", "", "", "")
     
  }

});