var tansaltebutton = document.querySelector("#translate-button");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#text-output");
console.log(output)
// output.innerText = "Parmeshwar"

function clickHandler() {
    console.log("clicked");
    console.log("input", textInput.value)
};
tansaltebutton.addEventListener("click", clickHandler);


