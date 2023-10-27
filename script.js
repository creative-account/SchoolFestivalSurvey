let submitted = false;
button = document.getElementById("submit");

function submitting(){
    button.setAttribute("class", "button is-primary is-loading");
    submitted = true;
}