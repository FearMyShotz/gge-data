Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = 3;
var a = new Map();
function addExecutedMethod(e, t, n) {
  if (a.has(e)) {
    var i = a.get(e);
    var s = n;
    if (i.has(t)) {
      s = (i.get(t) + n) / 2;
    }
    i.set(t, s);
  } else {
    a.set(e, new Map().set(t, n));
  }
  return a.get(e).get(t);
}
exports.executionMethodTime = function executionMethodTime(e, t, n = Object.getOwnPropertyDescriptor(e, t)) {
  var a = n.value;
  n.value = function () {
    var n = [];
    for (var s = 0; s < arguments.length; s++) {
      n[s - 0] = arguments[s];
    }
    console.log("Performance - Method: %c" + t + "%c scope:", "color: blue;", "color: black;");
    var r = performance.now();
    var o = a.apply(this, n);
    var l = performance.now() - r;
    var u = l > i ? "red" : "green";
    var c = addExecutedMethod(e, t, l);
    console.log("Performance - Method %c" + t + "%c took - %c" + l + " %cms [Average time: %c" + c + " %cms]", "color: blue;", "color: black;", "color: " + u + ";", "color: black;", "color: " + u + ";", "color: black;");
    return o;
  };
  return n;
};
exports.executionGetterTime = function executionGetterTime(e, t, n = Object.getOwnPropertyDescriptor(e, t)) {
  var a = n.get;
  if (a) {
    n.get = function () {
      console.log("Performance - Getter: %c" + t + "%c scope:", "color: blue;", "color: black;");
      var n = performance.now();
      var s = a !== undefined ? a.apply(this) : undefined;
      var r = performance.now() - n;
      var o = r > i ? "red" : "green";
      var l = addExecutedMethod(e, t, r);
      console.log("Performance - Getter: %c" + t + "%c took - %c" + r + " %cms [Average time: %c" + l + " %cms]", "color: blue;", "color: black;", "color: " + o + ";", "color: black;", "color: " + o + ";", "color: black;");
      return s;
    };
  }
  return n;
};
exports.executionSetterTime = function executionSetterTime(e, t, n = Object.getOwnPropertyDescriptor(e, t)) {
  var a = n.set;
  if (a) {
    n.set = function (n) {
      console.log("Performance - Setter: %c" + t + "%c scope:", "color: blue;", "color: black;");
      var s = performance.now();
      if (a !== undefined) {
        a.apply(this, [n]);
      }
      var r = performance.now() - s;
      var o = r > i ? "red" : "green";
      var l = addExecutedMethod(e, t, r);
      console.log("Performance - Setter: %c" + t + "%c took - %c" + r + " %cms [Average time: %c" + l + " %cms]", "color: blue;", "color: black;", "color: " + o + ";", "color: black;", "color: " + o + ";", "color: black;");
    };
  }
  return n;
};