Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./21.js");
var l = require("./4.js");
var c = require("./27.js");
var u = function (e) {
  function AllianceCrestCreation_PremiumLayout_ItemVE(t) {
    var i = this;
    i._activated = false;
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    l.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, i.bindFunction(i.onTimer));
    return i;
  }
  n.__extends(AllianceCrestCreation_PremiumLayout_ItemVE, e);
  AllianceCrestCreation_PremiumLayout_ItemVE.prototype.updateDisp = function () {
    this.disp.mc_effect.visible = this.layoutVO.effects.length > 0;
    this.disp.mc_effect.gotoAndStop(this.layoutVO.effectIconID);
    this.disp.mc_locked.visible = this.layoutVO.remainingSeconds <= 0;
    this.disp.mc_frame.mc_selected.visible = this._selected;
    this.disp.mc_frame.mc_active.visible = false;
    this.disp.mc_frame.mc_unlocked.visible = this.layoutVO.remainingSeconds > 0;
    this.disp.mc_frame.mc_locked.visible = this.layoutVO.remainingSeconds <= 0;
    this.onTimer();
  };
  AllianceCrestCreation_PremiumLayout_ItemVE.prototype.onTimer = function (e = null) {
    if (this.layoutVO.remainingSeconds <= 0) {
      this.disp.mc_time.visible = false;
    } else {
      this.disp.mc_time.visible = true;
      var t = c.CastleTimeStringHelper.getShortTimeString(this.layoutVO.remainingSeconds);
      this._itxtTime ||= o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_time.txt_time, new s.TextVO(""));
      this._itxtTime.textContentVO.stringValue = t;
      this._itxtTime.autoFitToBounds = true;
    }
  };
  Object.defineProperty(AllianceCrestCreation_PremiumLayout_ItemVE.prototype, "activated", {
    set: function (e) {
      this._activated = e;
      this.updateDisp();
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreation_PremiumLayout_ItemVE.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    l.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  Object.defineProperty(AllianceCrestCreation_PremiumLayout_ItemVE.prototype, "layoutType", {
    get: function () {
      return "Premium";
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestCreation_PremiumLayout_ItemVE;
}(require("./1380.js").AllianceCrestCreation_ALayout_ItemVE);
exports.AllianceCrestCreation_PremiumLayout_ItemVE = u;
a.classImplementsInterfaces(u, "MovieClip");