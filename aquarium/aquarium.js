const aquarium = document.getElementById("aquarium");
const fish = document.getElementById("fish");

let speed = 1;
let direction = {
  x: Math.random(),
  y: Math.random() / 5,
};
let intervalId;

function moveFish() {
  let fishRect = fish.getBoundingClientRect();
  let aquariumRect = aquarium.getBoundingClientRect();

  if (
    fishRect.left <= aquariumRect.left ||
    fishRect.right >= aquariumRect.right
  ) {
    direction.x *= -1;
    changeDirection();
  }
  if (
    fishRect.top <= aquariumRect.top ||
    fishRect.bottom >= aquariumRect.bottom
  ) {
    direction.y *= -1;
    changeDirection();
  }

  fish.style.left = Math.round((fish.offsetLeft + direction.x) * speed) + "px";
  fish.style.top = Math.round((fish.offsetTop + direction.y) * speed) + "px";
}

function changeDirection() {
  direction.x = Math.random() < 0.5 ? -1 : 1;
  direction.y = Math.random() < 0.5 ? -1 : 1;
}

function speedUp() {
  clearInterval(intervalId);
  speed *= 4;
  intervalId = setInterval(moveFish, 1000 / 60);
  setTimeout(function () {
    clearInterval(intervalId);
    speed /= 4;
    intervalId = setInterval(moveFish, 1000 / 60);
  }, 1000);
}

fish.addEventListener("click", speedUp);
intervalId = setInterval(moveFish, 1000 / 30);
setInterval(changeDirection, 500);
