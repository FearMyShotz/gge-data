Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleModalDialogBehavior() {
    return e.call(this) || this;
  }
  n.__extends(CastleModalDialogBehavior, e);
  CastleModalDialogBehavior.prototype.canModifyBlockDialogs = function () {
    return false;
  };
  return CastleModalDialogBehavior;
}(require("./406.js").CastleBasicDialogBehavior);
exports.CastleModalDialogBehavior = o;