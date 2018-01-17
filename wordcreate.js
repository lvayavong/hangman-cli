var letter = require('./letter.js');

function Word(select) {
	this.select = select;
	this.allow = [];
	this.found = false;

	this.pickWord = function() {
		for (var i=0; i < this.select.length; i++) {
			this.allow.push( new letter(this.select[i]));
		}
	};

	this.locateWd = function() {
		this.found = this.allow.every(function(currentLetter) {
			return currentLetter.appear;
		});
		return this.found;
	};

	this.ltrCheck = function(letterGuessed) {
		var letterReturned = 0;

		for (var i = 0; i < this.allow.length; i++) {
			if (this.allow[i].eachCharacter == letterGuessed){
				this.allow[i].appear = true;
				letterReturned++;
			}
		}
		return letterReturned;
	};

	this.wordCreate = function() {
		var string = '';
		for (var i=0; i < this.allow.length; i++){
			string += this.allow[i].letterCreate();
		}
		return string;
	};

}

module.exports = Word;
