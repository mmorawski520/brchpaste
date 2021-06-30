const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var EditingMode = false
var numberOfPages = 0;
var currentPage = 0;
var lel = ""
var isPassword = false

$(document).ready(function(){
$.when(
    $.getScript("js/htmlToAppend.js"),
    $.getScript("js/validations/getLoggedFunction.js"),
    $.getScript("js/validations/ifNoteExist.js"),
    $.getScript("js/data.js")
).done(function() {
   ifNoteExist()
})})