

var wordsArray = ["queen", "metallica", "acdc", "journey", "rem", "poison"];
var guessesRemaining = 15;
var lettersGuessed = ["","","","","","","","","","","","","","",""];
var gameActive = true;




function playHangman(){
	while (gameActive == true){

		//Generate a random number from 1-6
		var random_num = Math.random() * 7;
		random_num = Math.floor(random_num);

		var currentWord = wordsArray[random_num];

	}

}



