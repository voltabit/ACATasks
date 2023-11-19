Array.prototype.fakeReduce = (list, startVal, reducingFunction) => {
  if (list.length === 0) {
    return startVal;
  } else {
    const [first, ...rest] = list;
    const updatedAcc = reducingFunction(startVal, first);
    return fakeReduce(rest, updatedAcc, reducingFunction);
  }
};
