Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./4050.js");
var l = require("./333.js");
var c = function (e) {
  function StatusIconXPBooster() {
    return e.call(this, "Btn_PersonalXPBooster", new a.TextVO(""), p.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconXPBooster, e);
  StatusIconXPBooster.prototype.onClick = function () {
    if (this.boosterVO) {
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleXPBoosterDialog, new r.CastleXPBoosterDialogProperties(this.boosterVO.endTime, this.boosterVO.bonusPercentage));
    }
  };
  StatusIconXPBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("dialog_xpBooster_boost_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconXPBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.XP_BOOSTER_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconXPBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconXPBooster;
}(l.ACastleBoosterStatusIcon);
exports.StatusIconXPBooster = c;
var u = require("./9.js");
var d = require("./4051.js");
var p = require("./110.js");