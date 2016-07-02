var keysArray = [];
var charsArray = [];
var currentLetter;
var wordsArray = ["queen", "metallica", "acdc", "journey", "rem", "poison"];
var numGuesses = 15;
var gameActive = true;



//Creates an array containing the keyCode values for the letters a to z.
for (var i = 65; i < 91; i++){
	keysArray.push(i);
}


function checkGuess(){
	if (numGuesses > 0){
		numGuesses--;
	}
	else {
		numGuesses = 15;
		charsArray = [];
	}
	charsArray.push(currentLetter);
}


//Trigger's when any key is pressed.
document.onkeyup = function(e) {

	//Assigns keyCode to corresponding characters.
	if (e.keyCode == keysArray[0]){
		currentLetter = "A";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[1]){
		currentLetter = "B";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[2]){
		currentLetter = "C";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[3]){
		currentLetter = "D";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[4]){
		currentLetter = "E";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[5]){
		currentLetter = "F";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[6]){
		currentLetter = "G";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[7]){
		currentLetter = "H";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[8]){
		currentLetter = "I";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[9]){
		currentLetter = "J";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[10]){
		currentLetter = "K";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[11]){
		currentLetter = "L";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[12]){
		currentLetter = "M";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[13]){
		currentLetter = "N";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[14]){
		currentLetter = "O";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[15]){
		currentLetter = "P";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[16]){
		currentLetter = "Q";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[17]){
		currentLetter = "R";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[18]){
		currentLetter = "S";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[19]){
		currentLetter = "T";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[20]){
		currentLetter = "U";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[21]){
		currentLetter = "V";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[22]){
		currentLetter = "W";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[23]){
		currentLetter = "X";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[24]){
		currentLetter = "Y";
		checkGuess(numGuesses);
	}
	else if (e.keyCode == keysArray[25]){
		currentLetter = "Z";
		checkGuess(numGuesses);
	}
	else {
		alert("You didn't press a letter!")
	}


document.getElementById("letters-guessed").innerHTML = charsArray;
document.getElementById("guesses-remaining").innerHTML = numGuesses;

}



function playHangman(){

	//Generate a random number from 0-5
	var random_num = Math.random() * 6;
	random_num = Math.floor(random_num);

	var randomWord = wordsArray[random_num];

	document.getElementById("current-word").innerHTML = randomWord;

}


