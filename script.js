const advice = document.querySelector('#advice');
const dice = document.querySelector('#dice');
const adviceId = document.querySelector('#advice-id');


const url = "https://api.adviceslip.com/advice";

const getAdvice = () => {
    fetch(url)
        .then(response => response.json())
        .then(json => displayResults(json))
        .catch(error => console.error(`Algo deu errado:  ${error.message}`))
}

function displayResults(json) {
    slip = json.slip;
    advice.textContent = `"${slip.advice}"`;
    adviceId.textContent = slip.id;
}

getAdvice();