Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleBasicDialogBehavior() {}
  CastleBasicDialogBehavior.prototype.checkRegisterBehavior = function (e, t, i) {
    return !a.CastleModel.settingsData.isDestroyingGame;
  };
  CastleBasicDialogBehavior.prototype.checkDisplayBehavior = function (e, t, i, n, o) {
    return !!this.checkDisplayGenericBehavior(e, t, i, n);
  };
  CastleBasicDialogBehavior.prototype.checkDisplayGenericBehavior = function (e, t, i, n) {
    for (var r = s.int(i.length), l = 0; l < r; l++) {
      if (i[l].key == e.key) {
        return false;
      }
    }
    return !a.CastleModel.tutorialData.isTutorialActive || !!o.CastleTutorialDialogFilter.instance.isAllowed(e.key);
  };
  CastleBasicDialogBehavior.prototype.checkRemoveRegisteredWhenHideBehavior = function () {
    return false;
  };
  CastleBasicDialogBehavior.prototype.checkRemoveDisplayedWhenRegisterBehavior = function () {
    return false;
  };
  CastleBasicDialogBehavior.prototype.canModifyBlockDialogs = function () {
    return true;
  };
  return CastleBasicDialogBehavior;
}();
exports.CastleBasicDialogBehavior = n;
var o = require("./326.js");
var a = require("./4.js");
var s = require("./6.js");