
var mainContent=`<section class='NotePanel'>
        <ul class='ButtonPanel'>
            <li class='litem' id='p0'data-id='0' style='background-color:rgb(133, 203, 51);' onclick='current(0)'> <img id='z0' class='delete' data-id="0" onclick='deleteItem(0)' src='images/cancel.png' height='33%' width='auto' style='float:right;margin-top:0.2em;margin-right: 0.2em;'> </li>
        </ul>
        <button class='adder' onclick='addNewObject()'>+</button>
        <br> </section>
    <div class='left'>
        <div class='left-form'>
            <div>
            <label for='calendar'>kalendarz</label><br>
            <input  class='form' type='date' id='calendar' name='calendar'>
                        </div>
            <div style='margin-top:2em;'>
            <label for='password'>hasło</label> <span style='color:red;font-size:0.6em;' class='passwordError'></span><br>
            <input class='form' type='password' id='password' name='password'>
          </div>
          <div style='margin-top:2em;'>
            <label for='author'>autor</label>
            <br>
            <input placeholder='anonim' class='form' type='text' id='author' name='author'>
            <br> 
            </div>
        </div>
    </div>
    <div class='right'>
        <div class='right-form'>
            <label for='title'>tytuł</label>
            <br>
            <input class='form' maxlength='20' type='text' id='title' name='title'>
            <br>
            <label for='note'>notatka</label>
            <br>
            <textarea class='form' id='note' name='note'> </textarea>
            <br>
            <input type='submit' class='form' onclick='send()' id='send' value='stwórz'> </div>
    </div>
    </section>`
var notePanel=`<section class='NotePanel'>
                    <ul class='ButtonPanel'>
                    </ul><br></section>
                    <div class='left'>
                        <div class='left-form'>
                        </div>
                    </div>
                    <div class='right'>
                        <div class='right-form'>
                        </div>
                    </div>
                </section>`
var loginPanel=`<div style='text-align:center'>
                    <label>Podaj hasło<br>
                    <span style='color:red;font-size:.5em;'class='passwordError'>
                    </span>
                    <br>
                    <input id='getPassword' name='GetPassword' type='password'>
                    </label>
                    <br>
                    <input onclick='getLogged()' type='submit' value='zaloguj'>
                </div>`