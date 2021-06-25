let playerOneScore = 0;
let playerTwoScore = 0;
let maxScore = 5;

const playerOneDisplay = document.querySelector('#playerOneDisplay');
const playerTwoDisplay = document.querySelector('#playerTwoDisplay');
const scoreSelect = document.querySelector('#playingto');
const buttonOne = document.querySelector('#playerOneButton');
const buttonTwo = document.querySelector('#playerTwoButton');
const buttonReset = document.querySelector('#resetButton');

scoreSelect.addEventListener('input', function () {
    maxScore = parseInt(this.value);
    scoreSelect.disabled = true;
    console.log(maxScore);
    return maxScore;
});

buttonOne.addEventListener('click', function (e) {
    playerOneScore += 1;
    playerOneDisplay.innerText = `${playerOneScore}`;
    console.log(maxScore);
    if (playerOneScore === maxScore) {
        playerOneDisplay.classList.add('has-text-success');
        buttonOne.disabled = true;
        playerTwoDisplay.classList.add('has-text-danger');
        buttonTwo.disabled = true;
    }
});

buttonTwo.addEventListener('click', function (e) {
    playerTwoScore += 1;
    playerTwoDisplay.innerText = `${playerTwoScore}`;
    console.log(maxScore);
    if (playerTwoScore === maxScore) {
        playerTwoDisplay.classList.add('has-text-success');
        buttonTwo.disabled = true;
        playerOneDisplay.classList.add('has-text-danger');
        buttonOne.disabled = true;
    }
});

buttonReset.addEventListener('click', function () {
    buttonTwo.disabled = false;
    buttonOne.disabled = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.innerText = `0`;
    playerTwoDisplay.innerText = `0`;
    playerOneDisplay.classList.remove('has-text-success', 'has-text-danger')
    playerTwoDisplay.classList.remove('has-text-success', 'has-text-danger')
    scoreSelect.disabled = false;
    scoreSelect.value = 5;
    maxScore = 5;
});