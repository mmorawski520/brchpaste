 $.getScript("js/data.js")
function ifNoteExist(){
 if (urlParams.get('hash') == null) {
        $(".main").append(mainContent)
        EditingMode = true;
    } else {
        $.ajax({
            type: 'POST',
            url: 'php/ifPassword.php',
            data: {
                'hash': urlParams.get("hash")
            },
            success: function(data) {
                console.log(data)
                if (data == "doesnt exists") {
                    $(".main").append("<h1>Taka notatka nie istnieje :c</h1>")
                }
                if (data != "password" && data != "doesnt exists") {
                    $(".main").append(notePanel)
                    lel = JSON.parse(data);
                    numberOfPages = lel.length;
                    for (i = 0; i < lel.length; i++) {
                        $(".ButtonPanel").append("<li  data-id='"+i+"'id='p"+i+"'onclick='current("+i+")' class='litem'>"+lel[i].title+"</li>")

                    }
                    $(".left-form").append("<p> Autor : " + lel[0].author + "</p><br>")
                    if (lel[0].expiration_date == "0000-00-00 00:00:00") {
                        $(".left-form").append("<p> Wygasa : nigdy</p>")
                    } else {
                        $(".left-form").append("<p> Wygasa : "+lel[0].expiration_date+"</p>")
                    }
                    $(document).ready(function() {
                        $(".right-form").append("<textarea class='form' id='note' name='note' readonly>"+lel[0].contents+"</textarea>")
                        current(0)
                    })
                } else {
                    if(data=="password"){
                    isPassword = true;
                    $(".main").append(loginPanel)}
                }
            }
        })
    }
}