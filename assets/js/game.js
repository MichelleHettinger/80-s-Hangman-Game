

var currentLetter;

var allGuesses = [];
var incorrectGuesses = [];
var correctGuesses = [];
var correctGuessesInOrder = [];

var bandsArray = ["QUEEN", "METALLICA", "ACDC", "JOURNEY", "REM", "POISON", "BLONDIE", "GENESIS", "DEVO"];
var randomWord;
var bandLetters = [];

var isMatch;
var isRepeat;

var guessesRemaining = 15;

var loseCount = 0;
var winCount = 0;


//Pick a random word from the bandsArray and fill the bandLetters with the letters of the bands names.
generateWord();
//This function generates a word once at the loading of the .js and again later when a round is won/lost.
function generateWord(){
	//Generate a random number from 0-8
	var random_num = Math.random() * 9;
	random_num = Math.floor(random_num);

	//Assign randomWord to a word from the array whose index was chosen randomly.
	//Split the string into an array containing the individual letters of the randomly chosen word
	randomWord = bandsArray[random_num];
	bandLetters = randomWord.split("");

	//Shows that a randomly chosen band name was converted into an array containing each of its letters.
	console.log(randomWord + " " + bandLetters);
}


//On every keyup...
document.onkeyup = function(q) {

	//currentLetter is grabbed from the keyboard and converted to upper case.
	//Then the letter is pushed into the allGuesses array
	currentLetter = String.fromCharCode(q.keyCode).toUpperCase();
	allGuesses.push(currentLetter);

	console.log("Current Letter: " + currentLetter + "\n" + "Band Letters: " + bandLetters + "\n" + "All Guesses: " + allGuesses);


	//Checks to see if the letter has been typed before.
	//Checks to see if the letter matches with one in the band name.
	checkRepeat();
	checkMatch();

	console.log("Repeated Letter: " + isRepeat);
	console.log("Matched Letter: " + isMatch);


	//This function determines to push the currentLetter into.
	match_repeatComparison();

	console.log("Correct Guesses: " + correctGuesses);
	console.log("Incorrect Guesses: " + incorrectGuesses);
	console.log("Guesses Remaining:" + guessesRemaining);

	//Reveals the band name as it is being guessed.
	revealBand();
	console.log(correctGuessesInOrder);

	//Check to see if the game is still in progress or if a win/lose has happened
	checkProgress();


	printToHTML();
}



//Sole purpose is to check if the letter has been pressed before.
function checkRepeat(){
	var repeatCounter = -1;

	//Loop for the number of guesses previously made amount of times.
	//If the current letter equals one from the array of allGuesses, the counter variable counts up one.
	for (var i=0; i < allGuesses.length; i++){
		if (currentLetter == allGuesses[i]){
			repeatCounter++;
		}
	}
	//If counter is zero, the global isRepeat variable becomes false (signifying no matches found)
	//Otherwise a match was found and isRepeat becomes true.
	if (repeatCounter == 0){
		isRepeat = false;
	}
	else{
		isRepeat = true;
	}
}

//Sole purpose is to check if the currentLetter is also found in letters of band names)
function checkMatch(){
	var matchCounter = 0;

	//Loop for the band names length amount of times.
	//If the guessed letter is equal to the the bands letter at a given index, the counter variable counts up one.
	for (var i=0; i < bandLetters.length; i++){
		if (currentLetter == bandLetters[i]){
			matchCounter++;
		}
	}
	//If counter is zero, the global isMatch variable becomes false (signifying no matches found)
	//Otherwise a match was found and isMatch becomes true.
	if (matchCounter == 0){
		isMatch = false;
	}
	else{
		isMatch = true;
	}
}


//This function determines what to do with a letter that's been guessed.
function match_repeatComparison(){
		//If the same key is pressed twice, it is removed from allGuesses.
		if (isRepeat == true){
			allGuesses.pop(currentLetter);
		}
		//Letter has not been guessed and was a wrong guess, put the currentLetter in incorrectGuesses.
		if (isRepeat == false && isMatch == false){
			incorrectGuesses.push(currentLetter);
			guessesRemaining--;
		}
		//Letter has not been guessed and was a correct guess, put the currentLetter in correctGuesses.
		if (isRepeat == false && isMatch == true){
			correctGuesses.push(currentLetter);
			guessesRemaining--;
		}
}

//Keeps track of guesses remaining and determines win or loss.
function checkProgress(){
	var counter = 0;

	//Loop a number of times equal to the length of the band name. 
	//If a guess is equal to the the band letter at the same index, add 1 to the counter.
	for (var i=0; i<bandLetters.length; i++){
		if (correctGuessesInOrder[i] == bandLetters[i]){
			counter++;
		}
	}

	//If the counter is the length of the band name, the user has won.
	if (counter == bandLetters.length){
		alert("You win");
		winCount++;
		changeWord();
	}
	//If the number of guesses remaining is zero, the user has lost.
	if (guessesRemaining == 0){
		alert("You lose!");
		loseCount++;
		changeWord();
	}
}

//This function reveals the band name as the letters are guessed correctly.
function revealBand(){

	//If there are no correctGuesses,
	//For the number of letters in the bands name, fill the displayed guesses with an underscore.
	if (correctGuesses.length == 0){
		for (var i =0; i<bandLetters.length; i++){
			correctGuessesInOrder[i] = "_";
		}
	}
	else {
		//For the length of the bands name,
		for (var i=0; i<bandLetters.length; i++){
			//If the displayed guess is not the same as bandletters at index i,
			if (correctGuessesInOrder[i] != bandLetters[i]){
				//Loop for correctGuesses length number of times,
				for (var j=0; j<correctGuesses.length; j++){
					//If the correctGuesses at j is equal to bandLetters at i, the displayedGuess becomes the bandletter at index i
					if (correctGuesses[j] == bandLetters[i]){
						correctGuessesInOrder[i] = bandLetters[i];
					}
					//Otherwise the displayedGuess at index i (corresponding to the band letter's indexes) becomes an underscore.
					else {
						correctGuessesInOrder[i] = "_";
					}
				}
			}
		}
	}

	document.getElementById("current-word").innerHTML = correctGuessesInOrder.join(" ");
}
//I can invoke this whenever i need to display the information.
function printToHTML(){
	document.getElementById("num-wins").innerHTML = ("Wins: " + winCount + "  " + "Losses: " + loseCount);
	document.getElementById("letters-guessed").innerHTML = incorrectGuesses;
	document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
}

//This function runs when a win or loss has been reached. Resets the variables and generates a new word.
function changeWord(){
	bandLetters = [];
	correctGuesses = [];
	allGuesses = [];
	guessesRemaining = 15;

	generateWord();
}