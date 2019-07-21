console.log("Up and Running!")

var cards = ["Queen", "Queen", "King", "King"]

var cardsInPlay = []

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.")
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId])
	checkForMatch()
}

flipCard(0);
flipCard(1);
