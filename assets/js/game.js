var currentLetter;
var wordsArray = ["queen", "metallica", "acdc", "journey", "rem", "poison"];
var numGuesses = 15;
var gameActive = true;

// var numWins = document.getElementById("num-wins");
// var currentWord = document.getElementById("current-word");
// var guessesRemaining = document.getElementById("guesses-remaining");
// var lettersGuessed = document.getElementById("letters-guessed");


//Trigger's when any key is pressed.
document.onkeyup = function(e) {

	//Creates an array containing the keyCode values for the letters a to z.
	var keysArray = [65, 66];
	for (var i = 67; i < 91; i++){
		keysArray.push(i);
	}
	//

	//Assigns keyCode to corresponding characters.
	if (e.keyCode == keysArray[0]){
		currentLetter = "A";
	}
	else if (e.keyCode == keysArray[1]){
		currentLetter = "B";
	}
	else if (e.keyCode == keysArray[2]){
		currentLetter = "C";
	}
	else if (e.keyCode == keysArray[3]){
		currentLetter = "D";
	}
	else if (e.keyCode == keysArray[4]){
		currentLetter = "E";
	}
	else if (e.keyCode == keysArray[5]){
		currentLetter = "F";
	}
	else if (e.keyCode == keysArray[6]){
		currentLetter = "G";
	}
	else if (e.keyCode == keysArray[7]){
		currentLetter = "H";
	}
	else if (e.keyCode == keysArray[8]){
		currentLetter = "I";
	}
	else if (e.keyCode == keysArray[9]){
		currentLetter = "J";
	}
	else if (e.keyCode == keysArray[10]){
		currentLetter = "K";
	}
	else if (e.keyCode == keysArray[11]){
		currentLetter = "L";
	}
	else if (e.keyCode == keysArray[12]){
		currentLetter = "M";
	}
	else if (e.keyCode == keysArray[13]){
		currentLetter = "N";
	}
	else if (e.keyCode == keysArray[14]){
		currentLetter = "O";
	}
	else if (e.keyCode == keysArray[15]){
		currentLetter = "P";
	}
	else if (e.keyCode == keysArray[16]){
		currentLetter = "Q";
	}
	else if (e.keyCode == keysArray[17]){
		currentLetter = "R";
	}
	else if (e.keyCode == keysArray[18]){
		currentLetter = "S";
	}
	else if (e.keyCode == keysArray[19]){
		currentLetter = "T";
	}
	else if (e.keyCode == keysArray[20]){
		currentLetter = "U";
	}
	else if (e.keyCode == keysArray[21]){
		currentLetter = "V";
	}
	else if (e.keyCode == keysArray[22]){
		currentLetter = "W";
	}
	else if (e.keyCode == keysArray[23]){
		currentLetter = "X";
	}
	else if (e.keyCode == keysArray[24]){
		currentLetter = "Y";
	}
	else if (e.keyCode == keysArray[25]){
		currentLetter = "Z";
	}
	//



	// alert(currentLetter);
}







function playHangman(){
	//Generate a random number from 0-5
	var random_num = Math.random() * 6;
	random_num = Math.floor(random_num);

	//Assigns currentWord to the string in the array at index random_num
	var randomWord = wordsArray[random_num];

	console.log(randomWord);

	//This is the main loop that runs through each guess iteration
	for (var i = 16; i < numGuesses; i++){
		


	}

	

	// while (playHangman){

	// 	numWins.appendChild(theWins);
	// 	currentWord.appendChild(guesses);
	// 	guessesRemaining.appendChild(15 - numGuesses);
	// 	lettersGuessed.appendChild(theLetters);
	// }
}



