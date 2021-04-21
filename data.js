var author = document.getElementById("author");
var title = "";
var password = "";
var note = "";
var calendar = "";
var currentPage = 0;
var amountOfPages = 0;
var PageAfterDelete = 0;
var JustAnArray=[];
var hidden = false;
var checker=false;
 var xd=""
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
JustAnArray=[0]
ArrayForObjects[currentPage] = new Note("", "", "", "")

function addNewObject() {
  amountOfPages++
  JustAnArray[amountOfPages]=amountOfPages
  var lel="";
  console.log(document.getElementById("password").value)
  ArrayForObjects[amountOfPages] = new Note(document.getElementById("author").value, "",document.getElementById("password").value, "",document.getElementById("calendar").value)

  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("password").value = "";
  document.getElementById("note").value = "";
  document.getElementById("calendar").value = "";
  
   $(".ButtonPanel").append("<li  id='p" + amountOfPages + "' onclick='current(" + amountOfPages + ")' class='litem'><img  onclick='deleteItem(" + amountOfPages + ")' src='cancel.png' height='33%'' width='auto' style='float:right;margin-top:0.2em;margin-right: 0.2em;'></li>").fadein()
   displayDataInForms()
   current(amountOfPages)
     console.log(ArrayForObjects)
    console.log(JustAnArray)
}

//pop up functions

function pop_up_nt_error(){
  alert("Błędny tytuł i notatka");
}
function pop_up_n_error(){
  alert("Błędna notatka");
}
function pop_up_t_error(){
  alert("Błędny tytuł ");
}


function displayDataInForms(){
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
 function current(value) {
  
  if(hidden==false){
    $(".main").show()
  }
   
  currentPage = value
  for (i = 0; i <= ArrayForObjects.length; i++) {
    if (i == currentPage) {
      $("#p" + i).css("background-color", "#85CB33");
    } else {
      $("#p" + i).css("background-color", "#EFFFC8");
    }
    displayDataInForms()
  }

if(hidden==true){
  hidden=false;
}

}

function deleteItem(variable) {
  if(variable>0){
    if(amountOfPages>0){
   amountOfPages--}
  delete ArrayForObjects[variable]
  
  delete JustAnArray[variable]
  ArrayForObjects.splice(variable,1)
  JustAnArray.splice(variable,1)
 
  $("#p" + variable).remove()
  
 
  var i=0;
 if(variable==currentPage){
    console.log('ready')
    $(".main").hide()
    hidden=true;


  }
   

 
  
ArrayForObjects.sort()
 
for(i=0;i<=ArrayForObjects.length;i++){

    $("#p"+JustAnArray[i]).attr("onclick","current("+i+")");
    $("#p"+JustAnArray[i]).attr("id","p"+i);
    $("#z"+JustAnArray[i]).attr("onclick","deleteItem("+i+")");
    $("#z"+JustAnArray[i]).attr("id","z"+i); 
    JustAnArray[i]=i
}
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
    $("#p" + currentPage).html(document.getElementById("title").value + '<img id="z'+amountOfPages+'" onclick="deleteItem(' + amountOfPages + ')" src="cancel.png" height="33%" width="auto" style="float:right;margin-top:0.2em;margin-right: 0.2em;">');
     
  } catch (error) {
   // ArrayForObjects[currentPage] = new Note("", "", "", "")
     
  }
});
function send(){
  dataArray=JSON.stringify(ArrayForObjects)
 
  $.ajax({
            type:'POST',
            url:'addNotes.php',
            data:{"dataArray": dataArray},
            success:function(html){
              $(".modal_p").empty()
              if(html=="note_and_title_error"){
                 
                 $(".modal_p").append("Błędny tytuł i notatka")
                 display_modal()
              }
               if(html=="title_error"){
                 
                 $(".modal_p").append("Błędny tytuł")
                 display_modal()
              }
              if(html=="note_error"){
                
                 $(".modal_p").append("Błedna notatka")
                 display_modal()
              }
              if(html.slice(0,2)=="ok"){
                $(".main").empty();
                var hash=html.slice(2);
                $(".main").append("<span>Swoją notatkę znajdziesz pod linkiem <a href='index.php?hash="+hash+"'>index.php?hash="+hash+"</a></span>")

              }
              console.log(html)
            }
          })
  
}

