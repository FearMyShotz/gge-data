Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./333.js");
var l = function (e) {
  function StatusIconSamuraiBooster() {
    return e.call(this, "Btn_SamuraiBooster", new a.TextVO(""), d.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconSamuraiBooster, e);
  StatusIconSamuraiBooster.prototype.onClick = function () {
    if (this.boosterVO) {
      c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.SamuraiBoosterDialog);
    }
  };
  StatusIconSamuraiBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("samuraiBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconSamuraiBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.SAMURA_TOKEN_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconSamuraiBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconSamuraiBooster;
}(r.ACastleBoosterStatusIcon);
exports.StatusIconSamuraiBooster = l;
var c = require("./9.js");
var u = require("./4043.js");
var d = require("./110.js");