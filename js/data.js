var author = document.getElementById("author");
var title = "";
var password = "";
var note = "";
var calendar = "";

var amountOfPages = 0;
var PageAfterDelete = 0;
var JustAnArray = [];
var hidden = false;
var checker = false;

var ArrayForObjects = []
$.getScript("js/validations/noteValidation.js")
$.getScript("js/ui/content.js")
$.getScript("js/ui/pageBar.js")
JustAnArray = [0]
if (EditingMode == true) {
    ArrayForObjects[currentPage] = new Note("", "", "", "")
}

//***nav
$(".adder").click(function () {
    add()
})
$("body").on("click", ".litem", function (e) {
    current($(this).data('id'))
})


$("body").on("click", ".delete", function (e) {
    deleteItem($(this).data('id'))
})

//***Ajax upload with val
$("#send").click(function () {
    ArrayForObjects = ArrayForObjects.filter(Boolean)
    dataArray = JSON.stringify(ArrayForObjects)
    $.ajax({
        type: 'POST',
        url: 'php/addNotes.php',
        data: {
            "dataArray": dataArray
        },
        success: function (html) {
            noteValidation(html)
        }
    })
})