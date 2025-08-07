Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = function (e) {
  function CastleModalSingleDialogBehavior() {
    return e.call(this) || this;
  }
  n.__extends(CastleModalSingleDialogBehavior, e);
  CastleModalSingleDialogBehavior.prototype.checkDisplayBehavior = function (e, t, i, n, a) {
    return !o.CastleModel.tutorialData.isTutorialActive || !!s.CastleTutorialDialogFilter.instance.isAllowed(e.key);
  };
  CastleModalSingleDialogBehavior.prototype.checkRemoveDisplayedWhenRegisterBehavior = function () {
    return true;
  };
  CastleModalSingleDialogBehavior.prototype.checkRemoveRegisteredWhenHideBehavior = function () {
    return true;
  };
  CastleModalSingleDialogBehavior.prototype.canModifyBlockDialogs = function () {
    return false;
  };
  return CastleModalSingleDialogBehavior;
}(require("./406.js").CastleBasicDialogBehavior);
exports.CastleModalSingleDialogBehavior = a;
var s = require("./326.js");