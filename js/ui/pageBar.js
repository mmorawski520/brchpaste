function add(){if (EditingMode == true) {
    amountOfPages++
    JustAnArray[amountOfPages] = amountOfPages
    ArrayForObjects[amountOfPages] = new Note(document.getElementById("author").value, "", document.getElementById("password").value, "", document.getElementById("calendar").value)
    $("#title").val("")
    $("#note").val("")
    $(".ButtonPanel").append("<li  id='p" + amountOfPages + "' data-id='" + amountOfPages + "' class='litem'><img class='delete' onclick='deleteItem(" + amountOfPages + ")' src='images/cancel.png' height='33%'' width='auto' style='float:right;margin-top:0.2em;margin-right: 0.2em;'></li>")
    current(amountOfPages)
}}
function deleteItem(variable) {
    if (EditingMode == true) {
        delete ArrayForObjects[variable]
        delete JustAnArray[variable]

        ArrayForObjects.splice(variable, 1)
        JustAnArray.splice(variable, 1)
        ArrayForObjects.sort()

        $("#p" + variable).remove()
        if (variable == currentPage) {
            $("#title").val("")
            $("#note").val("")
        }
        for (i = 0; i <= ArrayForObjects.length; i++) {
            $("#p" + JustAnArray[i]).attr("onclick", "current(" + i + ")");
            $("#p" + JustAnArray[i]).attr("id", "p" + i);
            $("#z" + JustAnArray[i]).attr("onclick", "deleteItem(" + i + ")");
            $("#z" + JustAnArray[i]).attr("id", "z" + i);
            $("#z" + JustAnArray[i]).attr("data-id", i);
            $("#p" + JustAnArray[i]).attr("data-id", i);
            JustAnArray[i] = i
        }
        amountOfPages--
    }
}
function current(value) {
    currentPage = value
    $(".litem").css("background-color", "#EFFFC8");
    $("#p" + value).css("background-color", "#85CB33")
    displayDataInForms()
}