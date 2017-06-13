function Pokemon(name, hp, attack, accuracy, type){
	var Name = name;
	var HP = hp;
	var Attack = attack;
	var Accuracy = accuracy;
	var Type = type;

	this.getName = function(){
		return Name;
	}

	function getHP(){
		return HP;
	}

	function getAttack(){
		return Attack;
	}

	function getAccuracy(){
		return Accuracy;
	}

	function getType(){
		return this.Type;
	}

	function calculateDamage(attackPoints){
		return this.attack / 4 * attackPoints;
	}	

	function ifAccuracy(){
		var x = Math.floor((Math.random() * 100) + 1);
		if(x <= this.accuracy)
			return true;
		return false;
	}
}