var tansaltebutton = document.querySelector("#translate-button");

var textInput = document.querySelector("#text-input")

function clickHandler() {
    console.log("clicked");
    console.log("input", textInput.value)
};
tansaltebutton.addEventListener("click", clickHandler);


