var keyUp;
var keysArray = [];
var lettersGuessed = [];
var randomWord;
var bandsArray = ["QUEEN", "METALLICA", "ACDC", "JOURNEY", "REM", "POISON"];
var bandLetters = [];
var correctGuesses = [];
var displayedGuesses = [];
var lettersDisplayed = [];
var guessesRemaining = 15;
var match;
var repeat;
var loseCount = 0;
var winCount = 0;
var currentLetter = "";
var savedLetters = [];


//Fills up the keysArray with the values 65-91.
for (var i = 65; i < 91; i++){
	keysArray.push(i);
}
//If keyUp is equal to the value in the keysArray, then assign currentLetter to the one letter strings (alphabet).
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


//Pick a random word from the bandsArray and fill the bandLetters with the letters of the bands names.
generateWord();
//This function generates a word once at the loading of the .js and again later when a round is won/lost.
function generateWord(){
	//Generate a random number from 0-5
	var random_num = Math.random() * 6;
	random_num = Math.floor(random_num);

	//Assign randomWord to a word from the array whose index was chosen randomly.
	randomWord = bandsArray[random_num];


	//Fill up the nameArra with the letters of the band names.
	for (var j=0; j < randomWord.length; j++){
		bandLetters.push(randomWord.charAt(j));
	}

	//Shows that a randomly chosen band name was converted into an array containing each of its letters.
	console.log(randomWord + " " + bandLetters + " " + lettersGuessed);
}


//Sole purpose is to check if the letter has been pressed before.
function checkRepeat(letter, allGuesses){
	var repeat = -1;
	var noRepeat = 0;

	for (var i=0; i < allGuesses.length; i++){
		if (letter == allGuesses[i]){
			repeat++;
		}
		else {
			noRepeat++;
		}
		if (repeat == 0){
			noRepeat++
		}
	}
	var total_checkRepeat = (repeat + noRepeat);
	console.log("repeats: " + repeat + "\n" + "non-repeats:" + noRepeat + "\n" + "total:" + total_checkRepeat);

	if (repeat == 0){
		notRepeat();
	}
	else{
		isRepeat();
	}
}
function isRepeat(){
	repeat = true;
}
function notRepeat(){
	repeat = false;
}

//Sole purpose is to check if the currentLetter is also found in letters of band names)
function checkMatch(letter, band){
	var match = 0;
	var noMatch = 0;

	for (var i=0; i < band.length; i++){
		if (letter == band[i]){
			match++;
		}
		else {
			noMatch++;
		}
	}
	var total_checkMatch = (match + noMatch);
	console.log("matches: " + match + "\n" + "non-matches:" + noMatch + "\n" + "total:" + total_checkMatch);

	if (match == 0){
		notMatch();

	}
	else{
		isMatch();
	}
}
function isMatch(){
	match = true;
}
function notMatch(){
	match = false;
}

//This function determines what to do with a letter that's been guessed.
function match_repeatComparison(){
	//If the same key is pressed twice, it is NOT put into lettersGuessed.
	if (repeat == true){
		lettersGuessed.pop(currentLetter);
	}
	//Letter has not been guessed and was a wrong guess, put letter in lettersDisplayed.
	if (repeat == false && match == false){
		lettersDisplayed.push(currentLetter);
		guessesRemaining--;
	}
	//Letter has not been guessed and was a correct guess, put the letter in correctGuesses.
	if (repeat == false && match == true){
		correctGuesses.push(currentLetter);
		guessesRemaining--;
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
	lettersGuessed.push(letter);
	var allGuesses = lettersGuessed;
	//Makes sure all my variables are working correctly, so i am able to use them.
	console.log("Current Letter: " + letter + "\n" + "Band Letters: " + band + "\n" + "Letters Guessed: " + allGuesses);


	//Checks to see if the letter has been typed before. Returns repeat = true OR repeat = false.
	checkRepeat(letter, allGuesses);
	//Checks to see if the letter matches with one in the band name. Returns match = true OR match = false.
	checkMatch(letter, band);
	//Makes sure that my functions are correctly returning true and false.
	console.log("Match: " + match + "\n" + "Repeat:" + repeat);


	//This function determines what to do with a letter that's been guessed.
	match_repeatComparison();
	//Make sure my arrays to be displayed on the page are working correctly.
	console.log("correctGuesses: " + correctGuesses);
	console.log("lettersDisplayed: " + lettersDisplayed);

	//Reveals the band name as it is being guessed.
	revealBand();

	checkGuessesRemaining(displayedGuesses);
	console.log("guessesRemaining:" + guessesRemaining);


	printToHTML();


//end onkey
}

function checkGuessesRemaining(dispGuess){
	var counter = 0;

	for (var i=0; i<bandLetters.length; i++){
		if (dispGuess[i] == bandLetters[i]){
			counter++;
		}
	}

	console.log(counter);


	if (counter == bandLetters.length){
		alert("You win");
		winCount++;
		changeWord();
	}

	if (guessesRemaining == 0){
		alert("You lose!");
		loseCount++;
		changeWord();
	}
}


function changeWord(){
	lettersGuessed = [];
	bandLetters = [];
	correctGuesses = [];
	lettersDisplayed = [];
	displayedGuesses = [];
	guessesRemaining = 15;

	generateWord();
}








//I can invoke this whenever i need to display the information.
function printToHTML(){
	document.getElementById("num-wins").innerHTML = ("Wins: " + winCount + "  " + "Losses: " + loseCount);
	document.getElementById("letters-guessed").innerHTML = lettersDisplayed;
	document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
}


function revealBand(){
	if (displayedGuesses.length == 0){
		for (var i =0; i<bandLetters.length; i++){
			displayedGuesses[i] = "_";
		}
	}

	
	for (var i=0; i<bandLetters.length; i++){
		//Only enter the comparison loop if displayedGuesses at [i] has not been guessed.
		if (displayedGuesses[i] != bandLetters[i]){
			for (var j=0; j<correctGuesses.length; j++){
				if (correctGuesses[j] == bandLetters[i]){
					displayedGuesses[i] = bandLetters[i];
				}
				else {
					displayedGuesses[i] = "_";
				}
			}
		}
	}
	

	document.getElementById("current-word").innerHTML = displayedGuesses;
}