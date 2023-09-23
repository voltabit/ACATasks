function tracePrototypeChainOf(object) {
  let proto = object.constructor.prototype;
  let result = "";

  while (proto) {
    result += " -> " + proto.constructor.name;
    proto = Object.getPrototypeOf(proto);
  }

  return result;
}

let trace = tracePrototypeChainOf(document.body);
alert(trace);
