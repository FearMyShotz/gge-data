var n;
n = function () {
  return this;
}();
try {
  n = n || Function("return this")() || (0, eval)("this");
} catch (e) {
  if (typeof window == "object") {
    n = window;
  }
}
module.exports = n;