var t = require("./24.js");
function config(e) {
  try {
    if (!t.localStorage) {
      return false;
    }
  } catch (e) {
    return false;
  }
  var n = t.localStorage[e];
  return n != null && String(n).toLowerCase() === "true";
}
module.exports = function deprecate(e, t) {
  if (config("noDeprecation")) {
    return e;
  }
  var n = false;
  return function deprecated() {
    if (!n) {
      if (config("throwDeprecation")) {
        throw new Error(t);
      }
      if (config("traceDeprecation")) {
        console.trace(t);
      } else {
        console.warn(t);
      }
      n = true;
    }
    return e.apply(this, arguments);
  };
};