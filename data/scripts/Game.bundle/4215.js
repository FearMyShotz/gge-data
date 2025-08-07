Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = function (e) {
  function CastleDefaultDialogBehavior() {
    return e.call(this) || this;
  }
  n.__extends(CastleDefaultDialogBehavior, e);
  CastleDefaultDialogBehavior.prototype.checkDisplayBehavior = function (t, i, n, a, r) {
    return !!o.CastleModel.settingsData.isLoginReady && !!e.prototype.checkDisplayBehavior.call(this, t, i, n, a, r) && (!!o.CastleModel.tutorialData.isTutorialActive && !!s.CastleTutorialDialogFilter.instance.isInAllowedDialogs(t.key) || !r);
  };
  return CastleDefaultDialogBehavior;
}(require("./406.js").CastleBasicDialogBehavior);
exports.CastleDefaultDialogBehavior = a;
var s = require("./326.js");