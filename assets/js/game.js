var keyUp;
var currentLetter;
var keysArray = [];
var lettersGuessed = [];
var bandsArray = ["QUEEN", "METALLICA", "ACDC", "JOURNEY", "REM", "POISON"];
var nameArray = [];
var guessesRemaining = 15;
var gameActive = true;


//Fills up the keysArray with the values 65-91.
for (var i = 65; i < 91; i++){
	keysArray.push(i);
}

//Generate a random number from 0-5
var random_num = Math.random() * 6;
random_num = Math.floor(random_num);

//Assign randomWord to a word from the array whose index was chosen randomly.
var randomWord = bandsArray[random_num];
console.log(randomWord);

//Fill up the nameArra with the letters of the band names.
for (var j=0; j < randomWord.length; j++){
	nameArray.push(randomWord.charAt(j));
}
console.log(nameArray);

//On every keyup...
document.onkeyup = function(e) {

	//Take in the keyCode value for the letter pressed and put it in the keyUp variable.
	keyUp = e.keyCode;
	console.log(keyUp);

	//Convert every keycode to its corresponding letter in the alphabet.
	keyCodeToChar();
	console.log(currentLetter);

	//Check to see if the letter matches one of the letters in the randomWord
	checkMatch();
	console.log(charsArray + randomWord);

	//Displays the number of guesses remaining and the letters guessed.
	printToHTML();

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



function checkMatch(){

		if (currentLetter == randomWord.charAt(0) || currentLetter == randomWord.charAt(1) || currentLetter == randomWord.charAt(2)){
			console.log("match!");
		}

}



//If the currentLetter is the same as one in the charsArray, run the isRepeat function.	Otherwise run the isNotRepeat function.
function checkRepeat (){

	if ((currentLetter == lettersGuessed[0]) || (currentLetter == lettersGuessed[1]) || (currentLetter == lettersGuessed[2]) || (currentLetter == lettersGuessed[3]) || (currentLetter == lettersGuessed[4]) || (currentLetter == lettersGuessed[5]) || (currentLetter == lettersGuessed[6]) || (currentLetter == lettersGuessed[7]) || (currentLetter == lettersGuessed[8]) || (currentLetter == lettersGuessed[9]) || (currentLetter == lettersGuessed[10]) || (currentLetter == lettersGuessed[11]) || (currentLetter == lettersGuessed[12]) || (currentLetter == lettersGuessed[13])){
		isRepeat();
	}
	else{
		isNotRepeat();
	}
}


function isRepeat(){

}

//If it's not a repeat, push the current letter into the charsArray, decrease number of guesses left by 1
function isNotRepeat(){
	lettersGuessed.push(currentLetter);
	gussesRemaining--;

}


//I can invoke this whenever i need to display the information.
function printToHTML(){

	document.getElementById("letters-guessed").innerHTML = lettersGuessed;
	document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
	document.getElementById("current-word").innerHTML = randomWord;
}




