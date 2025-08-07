Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = "@implements";
exports.instanceOfInterface = function instanceOfInterface(e, t) {
  if (e === undefined || e === null) {
    return false;
  }
  var n = e.__proto__ && e.__proto__[i];
  return Boolean(n && n.has(t));
};
exports.classImplementsInterfaces = function classImplementsInterfaces(e) {
  var t = [];
  for (var n = 1; n < arguments.length; n++) {
    t[n - 1] = arguments[n];
  }
  e.prototype[i] = new Set(t);
};