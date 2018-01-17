var Word = require('./wordcreate.js');
var prompt = require('prompt');

console.log("Play Superhero Hangman!");
console.log("Guess a Superhero letter.");
prompt.start();



game = {
  winningWords: ['batman', 'shazam', 'superman', 'ironman', 'spiderman', 'thor', 'hulk'],
  wins: 0,
  guessRemain: 10,
  currentWord: null,

  playGame: function() {
    this.resetGuess();
    this.currentWord = new Word(this.winningWords[Math.floor(Math.random() * this.winningWords.length)]);
    this.currentWord.pickWord();
    this.promptClient();
  },

  resetGuess: function() {
    this.guessRemain = 10;
  },

  promptClient: function() {
    var client = this;
    prompt.get(['guessLet'], function(err, result) {
      console.log(result.guessLet);
      var amtGuessed = client.currentWord.ltrCheck(result.guessLet);

      if (amtGuessed == 0) {
        console.log("WRONG");
        client.guessRemain--;

      } else {
        console.log("CORRECT");
        if (client.currentWord.locateWd()) {
          console.log("Winner! " + client.currentWord.select);

          return;
        }
      }

      console.log("Guesses: " + client.guessRemain);

      if ((client.guessRemain > 0) && (client.currentWord.found == false)) {
        client.promptClient();
      } else if (client.guessRemain == 0) {
        console.log("You Lose. ", client.currentWord.select);
      } else {
        console.log(client.currentWord.wordCreate());
      }
    });

  }


};

game.playGame();
