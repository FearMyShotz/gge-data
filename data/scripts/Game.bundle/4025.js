Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./1126.js");
var l = require("./333.js");
var c = function (e) {
  function StatusIconKhanMedalBooster() {
    return e.call(this, "Btn_KhanMedalBooster", new a.TextVO(""), p.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconKhanMedalBooster, e);
  StatusIconKhanMedalBooster.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      if (!this.boosterVO) {
        return;
      }
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleKhanMedalBoosterDialog, new r.CastlePointBoosterDialogProperties(o.BoosterConst.KHAN_MEDAL_BOOST_ID));
    }
  };
  StatusIconKhanMedalBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("khanMedalBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconKhanMedalBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.KHAN_MEDAL_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconKhanMedalBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconKhanMedalBooster;
}(l.ACastleBoosterStatusIcon);
exports.StatusIconKhanMedalBooster = c;
var u = require("./9.js");
var d = require("./4026.js");
var p = require("./110.js");