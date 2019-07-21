console.log("Up and Running!")

var cards = [
{
rank: "Queen",
suit: "Diamond",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "King",
suit: "Diamond",
cardImage: "images/king-of-diamonds.png"
},
{
rank: "Queen",
suit: "Heart",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "King",
suit: "Heart",
cardImage: "images/king-of-hearts.png"
}
];

var cardsInPlay = []

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank)
	console.log("User flipped " + cards[cardId].rank)
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
}

flipCard(0);
flipCard(0);
checkForMatch();

