Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("PathFactory");
var a = function () {
  function PathFactory() {}
  PathFactory.prototype.build = function (e, t) {
    var n = e.replace(PathFactory.REGEXP_STRIP_WHITES, "");
    var a = e.match(PathFactory.REGEXP_DEFAULT_REPLACEMENT);
    if (a) {
      for (var s = 0, r = a; s < r.length; s++) {
        var o = r[s];
        var l = t[o = o.replace(PathFactory.REGEXP_STRIP_CURLY, "").replace(PathFactory.REGEXP_STRIP_WHITES, "")];
        if (!l) {
          i.warn("The environment setting '" + o + "' is not valid.");
        }
        try {
          var u = new RegExp("\\{\\s*" + o + "\\s*\\}", "gi");
          n = n.replace(u, l);
        } catch (e) {
          i.error("Replacing with RegExp failed for key", o, e, n);
        }
      }
    }
    return n;
  };
  PathFactory.REGEXP_STRIP_WHITES = /^\s+|\s+$/g;
  PathFactory.REGEXP_STRIP_CURLY = /^\{|\}$/g;
  PathFactory.REGEXP_DEFAULT_REPLACEMENT = /\{.*?\}/g;
  return PathFactory;
}();
exports.PathFactory = a;