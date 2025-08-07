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
  function CastleBasicSpecialEventTeaserDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleBasicSpecialEventTeaserDialog, e);
  CastleBasicSpecialEventTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_exit, this.dialogDisp.btn_ok]);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new s.TextVO(""));
    this.itxt_time.textAlign = o.GGSTextAlign.LEFT;
  };
  CastleBasicSpecialEventTeaserDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyProperties.call(this);
    this.setText();
    this.onUpdateEventTime(null);
  };
  CastleBasicSpecialEventTeaserDialog.prototype.setText = function () {};
  CastleBasicSpecialEventTeaserDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    l.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleBasicSpecialEventTeaserDialog.prototype.hideLoaded = function (t = null) {
    l.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    e.prototype.hideLoaded.call(this);
  };
  CastleBasicSpecialEventTeaserDialog.prototype.onUpdateEventTime = function (e) {
    var t = this.getEventVO();
    var i = 0;
    if (t && this.itxt_time.textContentVO) {
      i = t.remainingEventTimeInSeconds;
    }
    c.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, i);
    c.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, i);
    if (i <= 0) {
      this.hide();
    }
  };
  CastleBasicSpecialEventTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_exit:
        this.hide();
    }
  };
  CastleBasicSpecialEventTeaserDialog.prototype.getEventVO = function () {
    return null;
  };
  return CastleBasicSpecialEventTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleBasicSpecialEventTeaserDialog = u;
a.classImplementsInterfaces(u, "ICollectableRendererList");