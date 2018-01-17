var letter = function(let){
	this.eachCharacter = let;
	this.popUp = false;
	this.letterRender = function(){
		return !(this.popUp) ? "_" : this.eachCharacter;
	};
};

module.exports = letter;
