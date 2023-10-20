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
      return this.words;
    } else if (
      word[0] != this.words[this.words.length - 1].at(-1) ||
      this.words.includes(word)
    ) {
      this.game_over = true;
      return "Game is Over!";
    }
    this.words.push(word);
    return this.words;
  };
  restart() {
    this.game_over = false;
    this.words = [];
    return "game restarted";
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
console.log(game.play("y"));
console.log(game.play("m"));
