const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var EditingMode=false
var numberOfPages=0;
var currentPage=0;
 var lel=""
 if(urlParams.get('hash')==null){
 	
 	$(".main").append("<section class='NotePanel'> <ul class='ButtonPanel'> <li class='litem' id='p0' style='background-color:rgb(133, 203, 51);' onclick='current(0)'> <img onclick='deleteItem(0)' src='cancel.png' height='33%' width='auto' style='float:right;margin-top:0.2em;margin-right: 0.2em;'></li> </ul> <button class='adder' onclick='addNewObject()'>+</button><br> </section> <div class='left'> <div class='left-form'> <!--<form method='GET' action='addNotes.php'>--> <br> <label for='calendar'>kalendarz</label><br> <input class='form' type='date' id='calendar' name='calendar'><br> <label for='password'>hasło</label><br> <input class='form' type='password' id='password' name='password'><br> <br> <label for='author'>autor</label><br> <input placeholder='anonim' class='form' type='text' id='author' name='author'><br> </div> </div> <div class='right'> <div class='right-form'> <label for='title' >tytuł</label><br> <input class='form' maxlength='20' type='text' id='title' name='title'><br> <label for='note'>notatka</label><br> <textarea class='form' id='note' name='note'> </textarea><br> <input type='submit' class='form' onclick='send()'value='stwórz'></div></div></section>")         
    	EditingMode=true;
     } 
 else{
 	 
  $.ajax({
            type:'POST',
            url:'ifPassword.php',
            data:{'hash':urlParams.get("hash")},
            success:function(html){
            	 
            	$(".main").append("<section class='NotePanel'> <ul class='ButtonPanel'></ul><br></section><div class='left'> <div class='left-form'>   </div> </div> <div class='right'> <div class='right-form'>  </div></div></section>")
              	//$(".main").append("<section class='NotePanel'><ul class='ButtonPanel'></ul><div class='left'><div class='left-form'></div></div><div class='right'><div class='right-form'></div></div></section>")  
            	  lel=JSON.parse(html);
            	console.log(lel[1])
            	numberOfPages=lel.length;

            	for(i=0;i<lel.length;i++){

            		$(".ButtonPanel").append("<li  id='p" + i + "' onclick='current(" + i + ")' class='litem'>"+lel[i].title+"</li>")
            		
            	}
            	$(".left-form").append("<p> Autor : "+lel[0].author+"</p><br>")
            	if(lel[0].expiration_date=="0000-00-00 00:00:00"){
            		$(".left-form").append("<p> Wygasa : nigdy</p>")
            	}
            	else{
            			$(".left-form").append("<p> Wygasa : "+lel[0].expiration_date+"</p>")
            	}
            	$( document ).ready(function() {
            	
            	$(".right-form").append("<textarea class='form' id='note' name='note' readonly>"+lel[0].contents+"</textarea>")
            current(0)
            })

            }
          })
 }
