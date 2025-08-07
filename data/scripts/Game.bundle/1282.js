module.exports = function bind(e, t) {
  return function wrap() {
    for (var i = new Array(arguments.length), n = 0; n < i.length; n++) {
      i[n] = arguments[n];
    }
    return e.apply(t, i);
  };
};