var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "king";


var score = 0;
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var board = document.getElementById('game-board');
var boardCards = document.getElementsByClassName('card');
console.log("board Length : " + board);
console.log("card Length : " + boardCards.length);

var createBoard = function()
{
	//main cards loop
	for (var i = 0; i< boardCards.length; i++) {
		boardCards[i].setAttribute('data-card', cards[i]);
		console.log("Card ID : " + boardCards[i].id + "set to " + cards[i]);
		boardCards[i].addEventListener('click', isTwoCards);

	}

};

function processSelection(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
    score += 1;
  } else {
    alert("Sorry, try again.");
    if (score != 0)
    	{
    		score -= 1;
    	}

  }
  document.getElementById('scoreboard').innerHTML = score;
  resetGameBoard();
}

function resetGameBoard() {
for (var i = 0; i< boardCards.length; i++) {
		boardCards[i].innerHTML = ""

	}

}

//checks to see if there are cards in play
function isTwoCards() {
 console.log("this id : " + this.id + " " + this.getAttribute('data-card'));
 cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/C4g8iYR.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/oJR7L1s.png'>"; //queen
	}

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to processSelection function
    processSelection(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}


console.log("Start..")

createBoard();