/* todo

- when the fish reaches an end change direction
- the fish motion direction is mostly horizontal: maybe a ratio of 10:1
- once every 5 seconds change the trajectory
- on click generate bubbles
*/

const aquarium = document.getElementById("#aquarium");
const fish = document.getElementById("#fish");

// measure the size of the aquarium
let containerSize = async () => setInterval(aquarium.getElementSize(), 300);

// make the fish move about
function wander(poke = false) {
  poke ? (speed = 4) : (speed = 1);

  const posX = this.style.left;
  const posY = this.style.top;

  let moveX = Math.round(Math.random() * 100) + 10;
  let moveY = Math.round(Math.random() * 20) + 3;

  // reverse direction if fish reaches the edge of the aquarium
}
//

// poke should make the fish move aside quickly
function poke(position) {
  fish.wander(true);
}

// change trajectory A) slowly every 5 seconds B) quickly for 1 second, when the fish is clicked on
function changeTrajectory() {}

fish.wander();
