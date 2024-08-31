let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;
const pastGuesses = [];

function checkGuess() {
    const userGuess = parseInt(document.getElementById('user-guess').value);
    const feedbackMessage = document.getElementById('feedback-message');
    const attemptCountDisplay = document.getElementById('attempt-count');
    const pastGuessesList = document.getElementById('past-guesses');
    const correctAnswerMessage = document.getElementById('correct-answer-message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackMessage.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptCount++;
    attemptCountDisplay.textContent = `Attempts: ${attemptCount}`;

    let resultMessage = '';
    if (userGuess === randomNumber) {
        resultMessage = `Correct! You've guessed the number in ${attemptCount} attempts.`;
        feedbackMessage.style.color = "#28a745";
        correctAnswerMessage.textContent = '';
        document.getElementById('submit-btn').disabled = true;
    } else {
        resultMessage = "Your guess is wrong!";
        feedbackMessage.style.color = "#d9534f";
        correctAnswerMessage.textContent = `The correct number was ${randomNumber}.`;
    }

    feedbackMessage.textContent = resultMessage;

    pastGuesses.push(`Guess: ${userGuess} - ${resultMessage}`);
    updatePastGuesses();
}


function updatePastGuesses() {
    const pastGuessesList = document.getElementById('past-guesses');
    pastGuessesList.innerHTML = ''; 

    pastGuesses.forEach(guess => {
        const listItem = document.createElement('li');
        listItem.textContent = guess;
        pastGuessesList.appendChild(listItem);
    });
}


function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    document.getElementById('user-guess').value = '';
    document.getElementById('feedback-message').textContent = '';
    document.getElementById('attempt-count').textContent = 'Attempts: 0';
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('correct-answer-message').textContent = ''; 
    pastGuesses.length = 0;
    updatePastGuesses(); 
}


document.getElementById('submit-btn').addEventListener('click', checkGuess);
document.getElementById('restart-btn').addEventListener('click', restartGame);
