var questions = document.getElementsByClassName("questions");
for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", drop);
}

function drop() {
    var element = this.getElementsByTagName("p");
    var span = this.getElementsByTagName("span");
    if (element[0].style.display == "block") {
        element[0].style.display = "none";
        span[0].style.color = "hsl(237, 12%, 33%)";
        span[0].style.fontWeight = "400";
    }
    else {
        var elements = document.getElementsByTagName("p");
        var spans = document.getElementsByClassName("quest");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
            spans[i].style.color = "hsl(237, 12%, 33%)";
            spans[i].style.fontWeight = "400";
        }
        element[0].style.display = "block";
        span[0].style.color = "hsl(238, 29%, 16%)";
        span[0].style.fontWeight = "700";
    }
}