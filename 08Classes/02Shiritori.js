"use strict";
class Shiritori {
  words = [];
  game_over = false;

  play = function (word) {
    this.game_over = false;
    if (this.words.length === 0) {
      this.game_over = false;
      this.words.push(word);
    }
    if (this.game_over === true) {
      return console.log("Game is Over!");
    }
    if (
      word[0] != this.words[this.words.length - 1].at(-1) &&
      !(word in this.words)
    ) {
      this.game_over = true;
      return console.log("Game is Over!");
    }
    this.words.push(word);
    return this.words;
  };
  restart() {
    this.game_over = true;
    this.words = [];
  }
}
const game = new Shiritori();
console.log(game.play("new"));
console.log(game.play("war"));
console.log(game.play("monkey"));
