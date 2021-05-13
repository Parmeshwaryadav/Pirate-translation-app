var tansaltebutton = document.querySelector("#translate-button");

var textInput = document.querySelector("#text-input")

console.log(textInput);

function clickHandler() {
    console.log("clicked");
    console.log("input", textInput,)
};
tansaltebutton.addEventListener("click", clickHandler);


