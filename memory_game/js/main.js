console.log("Up and Running!")

var cards = ["Queen", "Queen", "King", "King"]

var cardsInPlay = []

var cardOne = cards[0]
var cardTwo = cards[1]

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry try again");
	}
}