const url = "https://api.adviceslip.com/advice";

fetch(url)
    .then(response => response.json())
    .then(json => displayResults(json))
    .catch(error => console.error(`Algo deu errado:  ${error.message}`))

function displayResults(json) {
    sentence = json.slip.advice;
    console.log(sentence)
}