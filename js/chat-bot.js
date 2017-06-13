function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	var name, trainer, rival, Rival;
 	var pokeList = [];
	var actions = [];

	var firstStage = false;
	var secondStage = false;
	var thirdStage = false;

	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(firstStage){
			var temp;
			if(this.match('1')){
				pokeList.push(new Pokemon("Squirtle", 100, 100, 100, "Water"));
			}
			else if(this.match('2')){
				temp = new Pokemon("Squirtle", 100, 100, 100, "Water")
				pokeList.push(temp);
			}
			else{
				temp = new Pokemon("Squirtle", 100, 100, 100, "Water")
				pokeList.push(temp);
			}

			actions.pop()
			actions.pop()
			actions.pop()

			secondStage = true;
			firstStage = false;

			return ["You have just recieved " + pokeList[0].getName(),

			"What shall your rival's name be?"];
		}
		else if(secondStage){
			rival = input;

			Rival = new trainer(rival)

			return ["Ah so your rival's name is " + rival, "Looks like he wants to challenge you to a battle!",
			"Get ready for your first Pokemon battle!"]

			secondStage = false;
			thirdStage = true;
		}
		else if(thirdStage){
			battle(rival);
		}


		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "um... hi?";
		else if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "this github thing is pretty cool, huh?";
		else if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";
		else if(this.match('^no+(\\s|!|\\.|$)'))
			return "don't be such a negative nancy :(";
		else if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["alright, see you around", "good teamwork!"];
		else if(this.match('(dumb|stupid|is that all)'))
			return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];
		else if(this.input == 'noop')
			return;
		else{
			name = input;

			actions.push("Squirtle [1]");
			actions.push("Charmander [2]");
			actions.push("Bulbasaur [3]");

			firstStage = true;

			return ["Hello there " + name, "Are you ready to start this new adventure!"
			, "To begin your quest you must first choose one Pokemon to begin with"
			, "You may choose the water Pokemon Squirtle [1]", "the fire Pokemon Charmander [2]"
			, "or the grass type Bulbasaur [3]", "Please enter your choice"] ;
		}
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
		return new RegExp(regex).test(this.input);
	}

}