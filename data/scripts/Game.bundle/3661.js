Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./4.js");
var u = require("./27.js");
var d = function (e) {
  function SkinTopPPDDExternal(t, i, n) {
    var o = e.call(this, t, "PivatePrimeDayDynamicDialog_BG_Skin_Top_Left_" + i) || this;
    o.offerVO = n;
    if (o.isLoaded) {
      o.onDisplayObjectClipIsLoaded(null);
    }
    return o;
  }
  n.__extends(SkinTopPPDDExternal, e);
  SkinTopPPDDExternal.prototype.onDisplayObjectClipIsLoaded = function (e = null) {
    if (this.offerVO) {
      this.updateTimer();
      c.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTimer));
    }
  };
  SkinTopPPDDExternal.prototype.updateTimer = function (e = null) {
    if (this.offerVO.remainingSeconds >= 1) {
      this.clipDisp.mc_timer.visible = true;
      this.clipDisp.mc_timeless.visible = false;
      var t = u.CastleTimeStringHelper.getEventTimeString(this.offerVO.remainingSeconds);
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.clipDisp.mc_timer.txt_copy, new r.TextVO(t));
    } else {
      this.clipDisp.mc_timer.visible = false;
      this.clipDisp.mc_timeless.visible = true;
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.clipDisp.mc_timeless.txt_copy, new s.LocalizedTextVO("dialog_specialOffer_limitedTime")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    }
  };
  SkinTopPPDDExternal.prototype.onHide = function () {
    c.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTimer));
  };
  return SkinTopPPDDExternal;
}(require("./551.js").PPDDExternalPart);
exports.SkinTopPPDDExternal = d;