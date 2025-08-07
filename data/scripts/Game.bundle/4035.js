Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./32.js");
var l = require("./4.js");
var c = require("./333.js");
var u = function (e) {
  function StatusIconPersonalFameBooster() {
    var t = e.call(this, "Btn_PersonalFameBooster", new s.TextVO(""), h.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    t.setTooltip("dialog_fameBoost_package_title");
    return t;
  }
  n.__extends(StatusIconPersonalFameBooster, e);
  StatusIconPersonalFameBooster.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      if (!this.boosterVO) {
        return;
      }
      d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastlePersonalFameBoosterDialog);
    }
  };
  StatusIconPersonalFameBooster.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.controller.addEventListener(r.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestChange));
  };
  StatusIconPersonalFameBooster.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.controller.removeEventListener(r.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestChange));
  };
  StatusIconPersonalFameBooster.prototype.onCrestChange = function (e) {
    this.customizeInnerIconClip(this._innerIconClip);
  };
  StatusIconPersonalFameBooster.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.customizeInnerIconClip(this._innerIconClip);
  };
  StatusIconPersonalFameBooster.prototype.colorCrest = function (e) {
    for (var t = l.CastleModel.userData.playerCrest.colorsTwo, i = 0; i < t.length; i++) {
      var n = new o.ColorTransform();
      n.color = t[i];
      e.colorChange["cc" + i].useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)], this.allowCaching);
    }
  };
  Object.defineProperty(StatusIconPersonalFameBooster.prototype, "boosterVO", {
    get: function () {
      return l.CastleModel.boostData.getBoosterByID(a.BoosterConst.PERSONAL_GLORY_BOOST_ID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconPersonalFameBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  StatusIconPersonalFameBooster.prototype.customizeInnerIconClip = function (t) {
    e.prototype.customizeInnerIconClip.call(this, t);
    if (t && t.isLoaded) {
      this.colorCrest(t.currentshownDisplayObject);
    }
  };
  return StatusIconPersonalFameBooster;
}(c.ACastleBoosterStatusIcon);
exports.StatusIconPersonalFameBooster = u;
var d = require("./9.js");
var p = require("./4036.js");
var h = require("./110.js");