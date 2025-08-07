module.exports = function spread(e) {
  return function wrap(t) {
    return e.apply(null, t);
  };
};