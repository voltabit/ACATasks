const aquarium = document.getElementById("aquarium");
const fish = document.getElementById("fish");
let flipped = false;

function getCurrentPosition() {
  return {
    x: window.getComputedStyle(fish).getPropertyValue("padding-left"),
    y: window.getComputedStyle(fish).getPropertyValue("padding-top"),
  };
}

function setTarget() {
  let destination = { x: 0, y: 0 };
  const currentPosition = getCurrentPosition();
  currentPosition.x = Number(currentPosition.x.slice(0, -2));
  currentPosition.y = Number(currentPosition.y.slice(0, -2));
  destination = {
    x: Math.round(Math.random() * (aquarium.offsetWidth - 313)),
    y: Math.round(Math.random() * (aquarium.offsetHeight - 174)),
  };

  if (destination.x < currentPosition.x && !flipped) {
    // flip left
    move(
      `transition: all 0.5s ease-out allow-discrete; padding-left: ${currentPosition.x}px; padding-top: ${currentPosition.y}px; transform: scale(-1, 1);`
    );
    flipped = true;
  } else if (destination.x > currentPosition.x && flipped) {
    // flip right
    move(
      `transition: all 0.5s ease-out allow-discrete; padding-left: ${currentPosition.x}px; padding-top: ${currentPosition.y}px; transform: scale(1, 1);`
    );
    flipped = false;
  }
  move(
    `transition: all 5s ease-in-out allow-discrete; padding-left: ${destination.x}px; padding-top: ${destination.y}px`
  );

  return null;
}
function move(direction) {
  fish.setAttribute("style", direction);
}

setTarget();

setInterval(setTarget, 3000);
