Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./19.js");
exports.Lazy = function Lazy(e) {
  var t;
  var n = {
    get tag() {
      return getWrapped().tag;
    }
  };
  function getWrapped() {
    if (!t) {
      for (var i in t = e()) {
        if (i !== "tag") {
          n[i] = t[i];
        }
      }
    }
    return t;
  }
  return i.create(function (e) {
    return getWrapped().check(e);
  }, n);
};