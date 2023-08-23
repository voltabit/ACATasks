switch (true) {
    case isSquare(shape):
      console.log("This shape is a square.");
    // Fall-through, since a square is a rectangle as well!
    case isRectangle(shape):
      console.log("This shape is a rectangle.");
    case isQuadrilateral(shape):
      console.log("This shape is a quadrilateral.");
      break;
    case isCircle(shape):
      console.log("This shape is a circle.");
      break;
  }