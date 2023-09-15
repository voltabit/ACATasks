/* Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
If a plane takes off, its isFlying property is set to true.
If a plane lands, its isFlying property is set to false.*/

const Airplane = {
  init(name) {
    this.name = name;
    this.isFlying = false;
  },
  takeOff() {
    this.isFlying = true;
    return console.log(`${this.name} is flying.`);
  },
  land() {
    this.isFlying = false;
    return console.log(`${this.name} has landed.`);
  },
};

Airplane.init("Mig 21");
Airplane.takeOff();
Airplane.land();
