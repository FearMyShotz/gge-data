Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./1842.js");
var l = require("./333.js");
var c = function (e) {
  function StatusIconFactionInvasionBooster() {
    return e.call(this, "Btn_FactionInvasionBooster", new a.TextVO(""), d.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconFactionInvasionBooster, e);
  StatusIconFactionInvasionBooster.prototype.onClick = function () {
    if (this.boosterVO) {
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleFactionInvasionBoosterDialog, new r.CastleGallaryDialogProperties(this.boosterVO.endTime, this.boosterVO.bonusPercentage));
    }
  };
  StatusIconFactionInvasionBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("reputationBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconFactionInvasionBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.REPUTATION_POINT_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconFactionInvasionBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconFactionInvasionBooster;
}(l.ACastleBoosterStatusIcon);
exports.StatusIconFactionInvasionBooster = c;
var u = require("./9.js");
var d = require("./110.js");
var p = require("./4053.js");