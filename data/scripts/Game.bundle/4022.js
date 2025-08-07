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
  function StatusIconGallantryBooster() {
    return e.call(this, "Btn_GallantryBooster", new a.TextVO(""), p.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconGallantryBooster, e);
  StatusIconGallantryBooster.prototype.onClick = function () {
    if (this.boosterVO) {
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleGallantryBoosterDialog, new r.CastleGallaryDialogProperties(this.boosterVO.endTime, this.boosterVO.bonusPercentage));
    }
  };
  StatusIconGallantryBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTooltip("gallantryBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconGallantryBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.GALLANTRY_POINTS_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconGallantryBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconGallantryBooster;
}(l.ACastleBoosterStatusIcon);
exports.StatusIconGallantryBooster = c;
var u = require("./9.js");
var d = require("./4023.js");
var p = require("./110.js");