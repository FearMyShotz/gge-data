Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./333.js");
var l = function (e) {
  function StatusIconFameBooster() {
    var t = e.call(this, "Btn_FameBooster", new a.TextVO(""), d.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    t.setTooltip("event_title_16");
    return t;
  }
  n.__extends(StatusIconFameBooster, e);
  StatusIconFameBooster.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      if (!this.boosterVO) {
        return;
      }
      c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleFameBoosterEventDialog);
    }
  };
  Object.defineProperty(StatusIconFameBooster.prototype, "boosterVO", {
    get: function () {
      return s.CastleModel.boostData.getBoosterByID(o.BoosterConst.GLORY_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconFameBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconFameBooster;
}(r.ACastleBoosterStatusIcon);
exports.StatusIconFameBooster = l;
var c = require("./9.js");
var u = require("./1841.js");
var d = require("./110.js");