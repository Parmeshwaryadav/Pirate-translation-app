var tansaltebutton = document.querySelector("#translate-button");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#text-output");

var siteURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return siteURL + "?text=" + text;
};
function errorTranslated(error) {
    console.log("Something Went Wrong On Server")
    alert("Something Went Wrong On Server Please try Again !"       
};
function clickHandler() {
    var inputText = textInput.value;
    fetch(getTranslationURL(inputText)) 
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorTranslated)   
};
tansaltebutton.addEventListener("click", clickHandler);


