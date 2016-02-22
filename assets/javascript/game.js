
		var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var wins = 0;
		var losses = 0;
		var left = 10;
		var guess = [];

// Computer picks a letter
		var computerguess = alphabet[Math.floor(Math.random() * alphabet.length)];

// player trys there luck, and chooses different letters
		document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode);
		
		// make sure the player chooses a letter
			if(alphabet.indexOf(userGuess) >= 0){
			// check to see if the user guessed correctly 
				if (computerguess==userGuess) {
					wins++;
					alert("you won!!");
					guess=[];
					left=10;
					computerguess = alphabet[Math.floor(Math.random() * alphabet.length)];
				}

				else if (left==0) {
					losses++;
					guess = [];
					console.log("game over");
					left=10;
					computerguess = alphabet[Math.floor(Math.random() * alphabet.length)];
				};

				// add the user's guess to the guess array
				guess.push(userGuess);

			 // you only have 10 chances to hit the right letter			
				left= (left-1);
				var bar = ((left*10)+"%")

				// showing the results on the page
					document.querySelector('#losses').innerHTML = losses;
					document.querySelector('#win').innerHTML = wins;
					document.querySelector('#guess').innerHTML = guess;
					document.querySelector('#left').innerHTML = left;

					// Moves the progress bar according to how many guess you have left
					document.querySelector('#report').style.width = bar;
				}

			else {
	    alert('please choose a letter');
	  	}
	}