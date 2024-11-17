let player = {
  name: "Max Bet",
  chips: 200,
  bet: 0,
};

let arrayse = [];

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": R" + player.chips;

// initialise cards
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// Determine the bet amount > 0 (2 messages)
function startGame() {
  if (player.chips <= 0) {
    message = "Not enough chips! Refresh the page";
    messageEl.textContent = message;
    return;
  }

  // Ask for the bet amount
  let betAmount = parseInt(prompt("How much would you like to bet?"));
  if (isNaN(betAmount) || betAmount <= 0 || betAmount > player.chips) {
    message = "Invalid bet amount!";
    messageEl.textContent = message;
    return;
  }

  player.bet = betAmount;
  player.chips -= betAmount;

  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
