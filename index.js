const inputMessage = document.querySelector("#input");
const outputMessage = document.querySelector("#output");
const clickbtn = document.querySelector("#translatebtn");
 

var userClicked = 1;
var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Oops, Something went wrong!");
}

function translateText() {
  var inputText = inputMessage.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputMessage.innerText = translatedText;
    })
    .catch(errorHandler);
}

clickbtn.addEventListener("click", translateText);