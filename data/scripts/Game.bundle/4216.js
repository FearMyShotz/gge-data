Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = function (e) {
  function CastleLoginDialogBehavior() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLoginDialogBehavior, e);
  CastleLoginDialogBehavior.prototype.checkRegisterBehavior = function (e, t, i) {
    return true;
  };
  CastleLoginDialogBehavior.prototype.checkDisplayBehavior = function (e, t, i, n, a) {
    for (var s = o.int(i.length), r = 0; r < s; r++) {
      if (i[r].key == e.key) {
        return false;
      }
    }
    return true;
  };
  return CastleLoginDialogBehavior;
}(require("./406.js").CastleBasicDialogBehavior);
exports.CastleLoginDialogBehavior = a;