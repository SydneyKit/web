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
            location.href = "loveme1.html";
        } else if (inputText.toLowerCase() == "special topics") {
            location.href = "loveme1.html";}  
        else if (inputText.toLowerCase() == "ozzie story") {
        location.href = "loveme2.html";} 
    }
});