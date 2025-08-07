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
  function StatusIconKhanTabletBooster() {
    return e.call(this, "Btn_KhanTabletBooster", new a.TextVO(""), p.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconKhanTabletBooster, e);
  StatusIconKhanTabletBooster.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      if (!this.boosterVO) {
        return;
      }
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleKhanTabletBoosterDialog, new r.CastlePointBoosterDialogProperties(o.BoosterConst.KHAN_BOOST_ID));
    }
  };
  StatusIconKhanTabletBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("nomadBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconKhanTabletBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.KHAN_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconKhanTabletBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconKhanTabletBooster;
}(l.ACastleBoosterStatusIcon);
exports.StatusIconKhanTabletBooster = c;
var u = require("./9.js");
var d = require("./4028.js");
var p = require("./110.js");