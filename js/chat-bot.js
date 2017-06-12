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
	var name, trainer;
 	var pokeList = [];
	var actions = [];

	var firstStage = false;
	var secondStage = false;

	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(firstStage){
			if(this.match('1'))
				pokeList.push("Squirtle");
			else if(this.match('2'))
				pokeList.push("Squirtle");
			else
				pokeList.push("Squirtle");

			actions.pop().pop().pop()
			return "You have just recieved " + pokeList[0];
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