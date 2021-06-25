let playerOneScore = 0;
let playerTwoScore = 0;
let maxScore = 5;


const playerOneDisplay = document.querySelector('#playerOneDisplay');
const playerTwoDisplay = document.querySelector('#playerTwoDisplay');
const scoreSelect = document.querySelector('select');
const buttonOne = document.querySelector('#playerOneButton');
const buttonTwo = document.querySelector('#playerTwoButton');
const buttonReset = document.querySelector('#resetButton');

scoreSelect.addEventListener('input', function () {
    maxScore = parseInt(scoreSelect.value);
    console.log(maxScore);
    return maxScore;
});

buttonOne.addEventListener('click', function (e) {
    playerOneScore += 1;
    playerOneDisplay.innerText = `${playerOneScore}`;
    console.log(maxScore);
    if (playerOneScore === maxScore) {
        playerOneDisplay.style.color = "green";
        buttonOne.disabled = true;
        playerTwoDisplay.style.color = "red";
        buttonTwo.disabled = true;
    }
});

buttonTwo.addEventListener('click', function (e) {
    playerTwoScore += 1;
    playerTwoDisplay.innerText = `${playerTwoScore}`;
    console.log(maxScore);
    if (playerTwoScore === maxScore) {
        playerTwoDisplay.style.color = "green";
        buttonTwo.disabled = true;
        playerOneDisplay.style.color = "red";
        buttonOne.disabled = true;
    }
});

buttonReset.addEventListener('click', function () {
    buttonTwo.disabled = false;
    buttonOne.disabled = false;
    playerOneDisplay.innerText = `0`;
    playerTwoDisplay.innerText = `0`;
    playerOneDisplay.style.color = "black";
    playerTwoDisplay.style.color = "black";
});