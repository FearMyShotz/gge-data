Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./43.js");
var s = function (e) {
  function CastlePreloaderDialogBehavior() {
    return e.call(this) || this;
  }
  n.__extends(CastlePreloaderDialogBehavior, e);
  CastlePreloaderDialogBehavior.prototype.checkRegisterBehavior = function (t, i, n) {
    if (e.prototype.checkRegisterBehavior.call(this, t, i, n)) {
      for (var s = o.int(i.length), r = 0; r < s; r++) {
        if (i[r].type == a.CastleDialogConsts.DIALOG_TYPE_PRELOADER) {
          return false;
        }
      }
      s = o.int(n.length);
      for (var l = 0; l < s; l++) {
        if (n[l].type == a.CastleDialogConsts.DIALOG_TYPE_PRELOADER) {
          return false;
        }
      }
      return true;
    }
    return false;
  };
  CastlePreloaderDialogBehavior.prototype.checkDisplayBehavior = function (t, i, n, o, a) {
    return !!e.prototype.checkDisplayBehavior.call(this, t, i, n, o, a) && this.checkDisplayBehaviorPreloader(t, i, n, o);
  };
  CastlePreloaderDialogBehavior.prototype.checkDisplayBehaviorPreloader = function (e, t, i, n) {
    for (var s = o.int(i.length), r = 0; r < s; r++) {
      if (i[r].type == a.CastleDialogConsts.DIALOG_TYPE_PRELOADER) {
        return false;
      }
    }
    return true;
  };
  CastlePreloaderDialogBehavior.prototype.checkRemoveRegisteredWhenHideBehavior = function () {
    return true;
  };
  CastlePreloaderDialogBehavior.prototype.canModifyBlockDialogs = function () {
    return false;
  };
  return CastlePreloaderDialogBehavior;
}(require("./406.js").CastleBasicDialogBehavior);
exports.CastlePreloaderDialogBehavior = s;