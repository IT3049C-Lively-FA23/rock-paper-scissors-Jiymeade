// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

let game;

gameScreen.classList.add('d-none');

function updateScoreTallyUI() {
  const { username, score } = game;
  scoreParagraph.textContent = `${username}: ${score.user} v CPU: ${score.cpu}`;
}

function updateGameHistoryUI() {
  gameHistoryParagraph.innerHTML = '';
  game.gameHistoryLog.forEach(logEntry => {
    const p = document.createElement('p');
    p.textContent = logEntry;
    gameHistoryParagraph.appendChild(p);
  });
}

startGameButton.addEventListener('click', function () {
  const username = userName.value;
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
});

goButton.addEventListener('click', function () {
  const userSelectionValue = userSelection.value.toLowerCase();
  game.play(userSelectionValue);
  updateScoreTallyUI();
  updateGameHistoryUI();
});
