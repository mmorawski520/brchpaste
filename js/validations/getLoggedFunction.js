function getLogged() {
    isPassword = document.getElementById("getPassword").value;
    $.ajax({
        type: 'POST',
        url: 'php/ifPassword.php',
        data: {
            'hash': urlParams.get("hash"),
            'isPassword': isPassword
        },
        success: function(data) {
            if (data == "no logged") {
                $(".passwordError").html("błędne hasło")
            }
            if (data != "no logged" && data != "" && data != "doesnt exits" && isPassword != "") {
                $(".main").empty()
                $(".main").append("<section class='NotePanel'><ul class='ButtonPanel'></ul><br></section><div class='left'><div class='left-form'></div></div><div class='right'><div class='right-form'></div></div></section>")
                lel = JSON.parse(data);
                numberOfPages = lel.length;
                for (i = 0; i < lel.length; i++) {
                    $(".ButtonPanel").append("<li data-id='"+i+"' id='p" + i + "' onclick='current(" + i + ")' class='litem'>" + lel[i].title + "</li>")
                }
                $(".left-form").append("<p> Autor : " + lel[0].author + "</p><br>")
                if (lel[0].expiration_date == "0000-00-00 00:00:00") {
                    $(".left-form").append("<p> Wygasa : nigdy</p>")
                } else {
                    $(".left-form").append("<p> Wygasa : " + lel[0].expiration_date + "</p>")
                }
                
                    $(".right-form").append("<textarea class='form' id='note' name='note' readonly>" + lel[0].contents + "</textarea>")
               
                current(0)
            }
        }
    })
}