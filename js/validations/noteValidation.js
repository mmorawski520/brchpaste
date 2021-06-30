function noteValidation(html){
    $(".modal_p").empty()
    if(html=="too_much_notes_today"){
        $(".modal_p").append("dodałeś za dużo notatek na dziś")
        display_modal()
    }
    if(html=="too_much_notes"){
        $(".modal_p").append("możesz dodać max 10 stron")
        display_modal()
    }
    if(html == "to_long_password"){
        $(".modal_p").append("zbyt długe hasło ")
        display_modal()
    }
    if(html == "to_short_password"){
        $(".modal_p").append("zbyt krótkie hasło ")
        display_modal()
    }
    if(html == "to_short_note"){
        $(".modal_p").append("zbyt krótka notatka ")
        display_modal()
    }
    if(html == "to_long_note"){
        $(".modal_p").append("zbyt długie hasło ")
        display_modal()
    }
    if(html=="to_short_title"){
        $(".modal_p").append("zbyt krótki tytuł ")
        display_modal()
    }
    if (html == "to_long_title") {
        $(".modal_p").append("zbyt długi tytuł ")
        display_modal()
    }
    if (html == "note_and_title_error") {
        $(".modal_p").append("Błędny tytuł i notatka ")
        display_modal()
    }
    if (html == "title_error") {
        $(".modal_p").append("Błędny tytuł ")
        display_modal()
    }
    if (html == "note_error") {
        $(".modal_p").append("Błedna notatka ")
        display_modal()
    }
    if (html.slice(0, 2) == "ok") {
        $(".main").empty();
        var hash = html.slice(2);
        $(".main").append("<span>Swoją notatkę znajdziesz pod linkiem <a href='index.php?hash=" + hash + "'>index.php?hash=" + hash + "</a></span>")
    }
    console.log(html)
}