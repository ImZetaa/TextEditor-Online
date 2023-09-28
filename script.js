function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var container = document.querySelector(".container");
    container.classList.toggle("dark-mode");
    
    var h1 = document.querySelector(".container h1");
    h1.classList.toggle("dark-mode");

    var inputs = document.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle("dark-mode");
    }

    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("dark-mode");
    }
}