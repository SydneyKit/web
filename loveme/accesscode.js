$(document).ready(function() {
    $("input[placeholder]").each(function () {
        $(this).attr('size', $(this).attr('placeholder').length);
    });

    var input = document.getElementById('in');
    input.focus();

    // Working with input text
    input.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            // Enter key is pressed
            checkInput(e);
        }
    });

    function checkInput(e) {
        var inputText = e.target.value;
        if (inputText.toLowerCase() == "ozzie help")  {
            location.href = "volume1.html";
        } 
        else if (inputText.toLowerCase() == "preview") {
            location.href = "preview.html";} 
        else if (inputText.toLowerCase() == "mars story") {
        location.href = "volume2.html";} 
        else if (inputText.toLowerCase() == "mental health matters") {
            location.href = "notalone.html";} 
    }
});