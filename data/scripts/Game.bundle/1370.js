Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./238.js");
var r = createjs.TimerEvent;
var l = function (e) {
  function CastleTimedOKCharacterYesNoOKDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleTimedOKCharacterYesNoOKDialog, e);
  CastleTimedOKCharacterYesNoOKDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.timedOKCharacterYesNOOKDialogProperties.disableOkButtonForSeconds > 0) {
      this.dialogDisp.btn_yes.enableButton = false;
      this._enableTimer = new o.Timer(this.timedOKCharacterYesNOOKDialogProperties.disableOkButtonForSeconds * 1000);
      this._enableTimer.addEventListener(r.TIMER, this.bindFunction(this.onEnableTimerComplete));
      this._enableTimer.start();
    }
  };
  CastleTimedOKCharacterYesNoOKDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._enableTimer) {
      this._enableTimer.stop();
      this._enableTimer.removeEventListener(r.TIMER_COMPLETE, this.bindFunction(this.onEnableTimerComplete));
    }
  };
  CastleTimedOKCharacterYesNoOKDialog.prototype.onClick = function (t) {
    if (t.target != this.dialogDisp.btn_yes || this.dialogDisp.btn_yes.enabled) {
      e.prototype.onClick.call(this, t);
    }
  };
  CastleTimedOKCharacterYesNoOKDialog.prototype.onEnableTimerComplete = function (e) {
    this._enableTimer.stop();
    this.dialogDisp.btn_yes.enableButton = true;
  };
  Object.defineProperty(CastleTimedOKCharacterYesNoOKDialog.prototype, "timedOKCharacterYesNOOKDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTimedOKCharacterYesNoOKDialog;
}(s.CastleCharacterYesNoOKDialog);
exports.CastleTimedOKCharacterYesNoOKDialog = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");