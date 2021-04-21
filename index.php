

<!DOCTYPE html>
<html>
   <head>
      <title>brchpaste</title>
      <link rel="stylesheet" href="style.css">
      <script src="jquery-3.6.0.min.js"></script>
      <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet"> 
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <script>
         function myFunction() {
               var x = document.getElementById("myTopnav");
             if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                  x.className = "topnav";
               }
         }
         // Get the modal
      var modal = document.getElementById("modal");

 

 
var span = document.getElementsByClassName("close")[0];

 
function display_modal() {
  $("#modal").show()
}

// When the user clicks on <span> (x), close the modal
function hide_modal() {
   $("#modal").hide()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target != modal) {
     $("#modal").hide()
  }
} 
      </script>
   </head>
   <body>
      <!-- modal box-->
      <div id="modal" class="modalc">
      <div class="modal-c">
          
         <p class='modal_p'></p>
       </div>
</div>


      <!--Normal side content-->
      <nav class="topnav" id="myTopnav">
         <a href="#home" class="active">Stwórz notatkę</a>
         <a href="#news">Regulamin</a>
         <a href="#contact">Kontakt</a>
         <a href="javascript:void(0);" class="icon" onclick="myFunction()">
         <i class="fa fa-bars"></i>
         </a>
      </nav>
      <section class='main'>
      <section class='NotePanel'>
         <ul class='ButtonPanel'>
            <li class='litem' id="p0"  class='item' onclick="current(0)"> <img onclick="deleteItem(0)" src="cancel.png" height="33%" width="auto" style="float:right;margin-top:0.2em;margin-right: 0.2em;"></li>
         </ul>
         <button class="adder" onclick="addNewObject()">+</button><br>
      </section>
      
         <div class='left'>
            <div class='left-form'>
               <!--<form method="GET" action="addNotes.php">-->
               <br>
               <label for="calendar">kalendarz</label><br>
               <input class="form" type="date" id="calendar" name="calendar"><br>
               <label for="password">hasło</label><br>
               <input class="form" type="password" id="password" name="password"><br>
               <br>
               <label  for="author">autor</label><br>
               <input placeholder="anonim"  class="form" type="text" id="author" name="author"><br>
            </div>
         </div>
         <div class='right'>
            <div class="right-form">
               <label  for="title" >tytuł</label><br>
               <input class="form" maxlength="20" type="text" id="title" name="title"><br>
               <label for="note">notatka</label><br>
               <textarea class="form"      id="note" name="note">
               </textarea><br>
               <input type='submit' class="form" onclick="send()"value="stwórz">
            </div>
         </div>
      </section>
      <!--</form>-->
   </body>
   <script src="data.js"></script>
</html>

