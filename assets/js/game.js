var keyUp;
var keysArray = [];
var lettersGuessed = [];
var bandsArray = ["QUEEN", "METALLICA", "ACDC", "JOURNEY", "REM", "POISON"];
var bandLetters = [];
var correctGuesses = [];
var guessesRemaining = 15;
var gameActive = true;


//Fills up the keysArray with the values 65-91.
for (var i = 65; i < 91; i++){
	keysArray.push(i);
}

//Pick a random word from the bandsArray and fill the bandLetters with the letters of the bands names.
generateWord();
function generateWord(){
	//Generate a random number from 0-5
	var random_num = Math.random() * 6;
	random_num = Math.floor(random_num);

	//Assign randomWord to a word from the array whose index was chosen randomly.
	var randomWord = bandsArray[random_num];


	//Fill up the nameArra with the letters of the band names.
	for (var j=0; j < randomWord.length; j++){
		bandLetters.push(randomWord.charAt(j));
	}

	//Shows that a randomly chosen band name was converted into an array containing each of its letters.
	console.log(randomWord + " " + bandLetters + " " + lettersGuessed);

}

//If keyUp (a number) is equal to the value in the keysArray, then assign currentLetter to the one letter strings (alphabet).
function keyCodeToChar(){
	if (keyUp == keysArray[0]){
		currentLetter = "A";
	}
	else if (keyUp == keysArray[1]){
		currentLetter = "B";
	}
	else if (keyUp == keysArray[2]){
		currentLetter = "C";
	}
	else if (keyUp == keysArray[3]){
		currentLetter = "D";
	}
	else if (keyUp == keysArray[4]){
		currentLetter = "E";
	}
	else if (keyUp == keysArray[5]){
		currentLetter = "F";
	}
	else if (keyUp == keysArray[6]){
		currentLetter = "G";
	}
	else if (keyUp == keysArray[7]){
		currentLetter = "H";
	}
	else if (keyUp == keysArray[8]){
		currentLetter = "I";
	}
	else if (keyUp == keysArray[9]){
		currentLetter = "J";
	}
	else if (keyUp == keysArray[10]){
		currentLetter = "K";
	}
	else if (keyUp == keysArray[11]){
		currentLetter = "L";
	}
	else if (keyUp == keysArray[12]){
		currentLetter = "M";
	}
	else if (keyUp == keysArray[13]){
		currentLetter = "N";
	}
	else if (keyUp == keysArray[14]){
		currentLetter = "O";
	}
	else if (keyUp == keysArray[15]){
		currentLetter = "P";
	}
	else if (keyUp == keysArray[16]){
		currentLetter = "Q";
	}
	else if (keyUp == keysArray[17]){
		currentLetter = "R";
	}
	else if (keyUp == keysArray[18]){
		currentLetter = "S";
	}
	else if (keyUp == keysArray[19]){
		currentLetter = "T";
	}
	else if (keyUp == keysArray[20]){
		currentLetter = "U";
	}
	else if (keyUp == keysArray[21]){
		currentLetter = "V";
	}
	else if (keyUp == keysArray[22]){
		currentLetter = "W";
	}
	else if (keyUp == keysArray[23]){
		currentLetter = "X";
	}
	else if (keyUp == keysArray[24]){
		currentLetter = "Y";
	}
	else if (keyUp == keysArray[25]){
		currentLetter = "Z";
	}
	else {
		alert("You didn't press a letter!")
	}	
}

//On every keyup...
document.onkeyup = function(q) {

	//Take in the keyCode value for the letter pressed and put it in the keyUp variable.
	keyUp = q.keyCode;

	//Convert every keycode to its corresponding letter in the alphabet and assigns it to currentLetter.
	keyCodeToChar();

	//Setting up variables to be used in other functions.
	var letter = currentLetter;
	var band = bandLetters;
	lettersGuessed.push(currentLetter);
	var allGuesses = lettersGuessed;

	//Makes sure all my variables are working correctly, so i am able to use them.
	console.log("Current Letter: " + letter + "\n" + "Band Letters: " + band + "\n" + "Letters Guessed: " + allGuesses);

	//Returns true if the letter matches one from the band name and false if it does not.
	checkMatch(letter, band);

	if (checkMatch(true) && checkRepeat(false)){
		lettersGuessed.push(currentLetter);
		console.log(lettersGuessed);
	}

	checkRepeat(letter, allGuesses);


}

//Sole purpose is to check if the currentLetter is also found in letters of band names)
function checkMatch(letter, band){
	for (var i=0; i < band.length; i++){
		if (letter == band[i]){
			console.log("Match!");
			return true;
		}
		else {
			console.log("No match :(");
			return false;
		}
	}
}

//Sole purpose is to check if the currentLetter has been pressed before.
function checkRepeat(letter, allGuesses){
	if (allGuesses.length = 0){
		return false;
	}

	else {
		for (var i=0; i <  allGuesses.length; i++){
			if (letter == allGuesses[i]){
				console.log("Typed that already!");
				return true;
				}
		}
	}
}









//I can invoke this whenever i need to display the information.
function printToHTML(){

	document.getElementById("letters-guessed").innerHTML = lettersGuessed;
	document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

}







// if ((currentLetter == lettersGuessed[0]) || (currentLetter == lettersGuessed[1]) || (currentLetter == lettersGuessed[2]) || (currentLetter == lettersGuessed[3]) || (currentLetter == lettersGuessed[4]) || (currentLetter == lettersGuessed[5]) || (currentLetter == lettersGuessed[6]) || (currentLetter == lettersGuessed[7]) || (currentLetter == lettersGuessed[8]) || (currentLetter == lettersGuessed[9]) || (currentLetter == lettersGuessed[10]) || (currentLetter == lettersGuessed[11]) || (currentLetter == lettersGuessed[12]) || (currentLetter == lettersGuessed[13])){
// 	return true;
// }
// else{
// 	return false;
// }