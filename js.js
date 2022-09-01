const adviceId = document.querySelector('[data-js="advice-id"]');
const advice = document.querySelector('.advice');
const adviceBtn = document.querySelector('.advice-button');

function printResponse() {
  fetch('https://api.adviceslip.com/advice?t=' + Math.random())
    .then(res => res.json())
    .then(data => {
      adviceId.textContent = data.slip.id;
      advice.textContent = '"' + data.slip.advice + '"';
    })
    .catch(error => error);
}

adviceBtn.addEventListener('click', printResponse);

printResponse();