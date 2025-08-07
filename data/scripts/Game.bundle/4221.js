Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = function (e) {
  function CastleSingleDialogBehavior() {
    return e.call(this) || this;
  }
  n.__extends(CastleSingleDialogBehavior, e);
  CastleSingleDialogBehavior.prototype.checkDisplayBehavior = function (e, t, i, n, a) {
    return !!o.CastleModel.settingsData.isLoginReady && (!o.CastleModel.tutorialData.isTutorialActive || !!s.CastleTutorialDialogFilter.instance.isAllowed(e.key)) && !a;
  };
  CastleSingleDialogBehavior.prototype.checkRemoveDisplayedWhenRegisterBehavior = function () {
    return true;
  };
  CastleSingleDialogBehavior.prototype.checkRemoveRegisteredWhenHideBehavior = function () {
    return true;
  };
  return CastleSingleDialogBehavior;
}(require("./406.js").CastleBasicDialogBehavior);
exports.CastleSingleDialogBehavior = a;
var s = require("./326.js");