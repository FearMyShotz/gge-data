Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./28.js");
var c = require("./4.js");
var u = require("./229.js");
var d = createjs.TimerEvent;
var p = function (e) {
  function CastleTimedNoClickDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new (o.getDefinitionByName("CastleTimedNoClick"))()) || this).itxt_title = t.textFieldManager.registerTextField(t.timedNoClickDialog.txt_title, new r.TextVO(""));
    t.itxt_copy = t.textFieldManager.registerTextField(t.timedNoClickDialog.txt_copy, new r.TextVO(""));
    t.itxt_copy.autoFitToBounds = true;
    return t;
  }
  n.__extends(CastleTimedNoClickDialog, e);
  CastleTimedNoClickDialog.prototype.applyProperties = function () {
    this.itxt_title.textContentVO.stringValue = this.dialogProperties.title;
    this.itxt_copy.textContentVO.stringValue = this.dialogProperties.copy;
    this.startCountdown();
  };
  CastleTimedNoClickDialog.prototype.hide = function () {
    c.CastleModel.userData.blockDialogs = false;
    this.stopCountdown();
    e.prototype.hide.call(this);
  };
  CastleTimedNoClickDialog.prototype.startCountdown = function () {
    if (this.dialogProperties.remainingTimeInSeconds > 0 && this.dialogProperties.remainingTimeInSeconds < l.ClientConstTime.SECONDS_PER_DAY) {
      this._timer = new a.Timer(this.dialogProperties.remainingTimeInSeconds * l.ClientConstTime.SEC_2_MILLISEC, 1);
      this._timer.addEventListener(d.TIMER_COMPLETE, this.bindFunction(this.onTimerComplete));
      this._timer.start();
    }
  };
  CastleTimedNoClickDialog.prototype.onTimerComplete = function (e) {
    this.hide();
  };
  CastleTimedNoClickDialog.prototype.stopCountdown = function () {
    if (this._timer) {
      this._timer.stop();
      this._timer.removeEventListener(d.TIMER_COMPLETE, this.bindFunction(this.onTimerComplete));
      this._timer = null;
    }
  };
  Object.defineProperty(CastleTimedNoClickDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimedNoClickDialog.prototype, "timedNoClickDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimedNoClickDialog.NAME = "CastleTimedNoClick";
  return CastleTimedNoClickDialog;
}(u.CastleDialog);
exports.CastleTimedNoClickDialog = p;
s.classImplementsInterfaces(p, "ICollectableRendererList");