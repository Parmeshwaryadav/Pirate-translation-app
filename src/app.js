var tansaltebutton = document.querySelector("#translate-button");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#text-output");

var siteURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return siteURL + "?text=" + text;
}
function clickHandler() {
    output.innerText = "api" + textInput.value;
};
tansaltebutton.addEventListener("click", clickHandler);


