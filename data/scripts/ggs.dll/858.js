Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind = function bind(e, t) {
  var n = [];
  for (var i = 2; i < arguments.length; i++) {
    n[i - 2] = arguments[i];
  }
  return function () {
    var i = [];
    for (var a = 0; a < arguments.length; a++) {
      i[a] = arguments[a];
    }
    return e.apply(t, n.concat(i));
  };
};