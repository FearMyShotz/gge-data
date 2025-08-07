Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./333.js");
var l = function (e) {
  function StatusIconAllianceCoinBooster() {
    return e.call(this, "Btn_AllianceCoinBooster", new a.TextVO(""), d.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconAllianceCoinBooster, e);
  StatusIconAllianceCoinBooster.prototype.onClick = function () {
    if (this.boosterVO) {
      c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.AllianceCoinBoosterDialog);
    }
  };
  StatusIconAllianceCoinBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("royalCoinsBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconAllianceCoinBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.ALLIANCE_COIN_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAllianceCoinBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconAllianceCoinBooster;
}(r.ACastleBoosterStatusIcon);
exports.StatusIconAllianceCoinBooster = l;
var c = require("./9.js");
var u = require("./4002.js");
var d = require("./109.js");