const aquarium = document.getElementById("aquarium");
const fish = document.getElementById("fish");
let fishAttributes = "";
let flipped = false;
let destination = { x: 0, y: 0 };

function getCurrentPosition() {
  return {
    x: window.getComputedStyle(fish).getPropertyValue("padding-left"),
    y: window.getComputedStyle(fish).getPropertyValue("padding-top"),
  };
}

function move() {
  const currentPosition = getCurrentPosition();
  destination = {
    x: Math.round(Math.random() * (aquarium.offsetWidth - 313)),
    y: Math.round(Math.random() * (aquarium.offsetHeight - 174)),
  };
  const xPos = Number(currentPosition.x.slice(0, -2));
  console.log(xPos, destination.x);
  if (destination.x < xPos && !flipped) {
    // flip fish
    fishAttributes = `transition: all 1s ease-out allow-discrete; -moz-transform: scale(-1, 1); -o-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); transform: scale(-1, 1);`;
    fish.setAttribute("style", fishAttributes);
    flipped = true;
  } else if (flipped && destination.x > xPos) {
    // flip fish
    fishAttributes = `transition: all 1s ease-out allow-discrete; -moz-transform: scale(1, 1); -o-transform: scale(1, 1); -webkit-transform: scale(1, 1); transform: scale(1, 1);`;
    fish.setAttribute("style", fishAttributes);
    flipped = false;
  }
  fishAttributes = `transition: all 5s ease-out allow-discrete; padding-left: ${destination.x}px; padding-top: ${destination.y}px`;
  fish.setAttribute("style", fishAttributes);
  return destination;
}
move();
setInterval(move, 3000);
