
//pop up functions

function pop_up_nt_error() {
    alert("Błędny tytuł i notatka");
}

function pop_up_n_error() {
    alert("Błędna notatka");
}

function pop_up_t_error() {
    alert("Błędny tytuł ");
}

function displayDataInForms() {
    console.log("====================")
    if (EditingMode == false) {

        document.getElementById("note").innerHTML = lel[currentPage].contents;
    }
    if (EditingMode == true) {
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
        if (EditingMode == true) {
            $("#p" + currentPage).html(document.getElementById("title").value + '<img class="delete"id="z' + amountOfPages + '" onclick="deleteItem(' + amountOfPages + ')" src="images/cancel.png" height="33%" width="auto" style="float:right;margin-top:0.2em;margin-right: 0.2em;">');
        } else {
            $("#p" + currentPage).html(document.getElementById("title").value);
        }
    } catch (error) {
    }
});
