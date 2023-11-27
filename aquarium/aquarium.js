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

function setDestination() {
  const currentPosition = getCurrentPosition();
  destination = {
    x: Math.round(Math.random() * (aquarium.offsetWidth - 313)),
    y: Math.round(Math.random() * (aquarium.offsetHeight - 174)),
  };
  const xPos = String(currentPosition.x).substring(0, -2);
  console.log(xPos);
  if (destination.x < xPos && !flipped) {
    console.log("targetCoordinates " + destination.x + " " + xPos);
    //flip fish
    fishAttributes = `transition: all 5s ease-out allow-discrete; padding-left: ${destination.x}px; padding-top: ${destination.y}px; -moz-transform: scale(-1, 1); -o-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); transform: scale(-1, 1);`;
    fish.setAttribute("style", fishAttributes);
    flipped = true;
  } else if (flipped && destination.x > currentPosition.x) {
    fishAttributes = `transition: all 5s ease-out allow-discrete; padding-left: ${destination.x}px; padding-top: ${destination.y}px`;
    flipped = false;
  } else {
    fishAttributes = `transition: all 5s ease-out allow-discrete; padding-left: ${destination.x}px; padding-top: ${destination.y}px`;
  }

  fish.setAttribute("style", fishAttributes);
  return destination;
}
setDestination();
setInterval(setDestination, 3000);
