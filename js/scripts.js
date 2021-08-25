var questions = document.getElementsByClassName("questions");
for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", drop);
}

function drop() {
    var element = this.getElementsByTagName("p");
    var span = this.getElementsByTagName("span");

    var elements = document.getElementsByTagName("p");
    var spans = document.getElementsByClassName("quest");

    if (element[0].style.display == "block") {
        element[0].style.display = "none";
        span[0].style.fontWeight = "400";
    }
    else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
            spans[i].style.fontWeight = "400";
        }
        element[0].style.display = "block";
        span[0].style.fontWeight = "700";
        span[0].disabled = true;
    }
}