"use strict";
class Shiritori {
  words = [];
  game_over = false;

  play = function (word) {
    if (this.game_over === true) {
      return "Game is Over!";
    }
    if (this.words.length === 0) {
      this.words.push(word);
      return word;
    } else if (word[0] != this.words[this.words.length - 1].at(-1)) {
      this.game_over = true;
      return `Invalid! - \"${word}\" should start with \"${this.words[
        this.words.length - 1
      ].at(-1)}\"`;
    } else if (this.words.includes(word)) {
      this.game_over = true;
      return `Invalid! - \"${word}\" has already been said`;
    }
    this.words.push(word);
    return `${word} is valid`;
  };
  restart() {
    this.game_over = false;
    this.words = [];
    return "\nGame Restarted!\n";
  }
}
const game = new Shiritori();
console.log(game.play("new"));
console.log(game.play("war"));
console.log(game.play("ram"));
console.log(game.play("minus"));
console.log(game.play("siren"));
console.log(game.play("near"));
console.log(game.play("ram"));
console.log(game.restart());
console.log(game.play("ram"));
console.log(game.play("monkey"));
