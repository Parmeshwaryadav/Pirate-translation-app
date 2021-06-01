var tansaltebutton = document.querySelector("#translate-button");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#text-output");

//Api from https://funtranslations.com/
var siteURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text) {
    return siteURL + "?text=" + text;
}

function clickHandler() {
    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedInput = json.contents.translated;
            output.innerText = translatedInput;
        })
        .catch(errorHandler)
}
tansaltebutton.addEventListener("click", clickHandler);
//error messages 
function errorHandler(error) {
    console.log("Something Went Wrong On Server", error)
    alert("Something Went Wrong On Server Please try Again !")
};