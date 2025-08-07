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
  function StatusIconRageBooster() {
    return e.call(this, "Btn_RageBooster", new a.TextVO(""), p.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconRageBooster, e);
  StatusIconRageBooster.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      if (!this.boosterVO) {
        return;
      }
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleRageBoosterDialog, new r.CastlePointBoosterDialogProperties(o.BoosterConst.RAGE_POINT_BOOST_ID));
    }
  };
  StatusIconRageBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("rageBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconRageBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.RAGE_POINT_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconRageBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconRageBooster;
}(l.ACastleBoosterStatusIcon);
exports.StatusIconRageBooster = c;
var u = require("./9.js");
var d = require("./4039.js");
var p = require("./110.js");