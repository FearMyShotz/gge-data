Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./13.js");
var r = require("./27.js");
var l = require("./20.js");
var c = require("./8.js");
var u = require("./11.js");
var d = createjs.TimerEvent;
var p = function (e) {
  function AccountBannedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, AccountBannedDialog.NAME) || this;
  }
  n.__extends(AccountBannedDialog, e);
  AccountBannedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], l.ClickFeedbackButtonHover, 1);
  };
  AccountBannedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(s.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.title)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(this.dialogProperties.copy));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_banned, new a.LocalizedTextVO("countdown_restTime_noValue"));
    this.timer = new o.Timer(1000, 0);
    this.timer.start();
    this.timer.addEventListener(d.TIMER, this.bindFunction(this.onTimer));
    this.onTimer();
  };
  AccountBannedDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this.timer.removeEventListener(d.TIMER, this.bindFunction(this.onTimer));
    this.timer.stop();
  };
  AccountBannedDialog.prototype.onTimer = function (e = null) {
    var t = r.CastleTimeStringHelper.getShortTimeString(this.dialogProperties.remainingTimeInSeconds);
    if (this.tf_Timer) {
      this.tf_Timer.text = t;
    } else {
      this.tf_Timer = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new a.TextVO(t));
    }
  };
  AccountBannedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(AccountBannedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AccountBannedDialog.__initialize_static_members = function () {
    AccountBannedDialog.NAME = "AccountBanned";
  };
  return AccountBannedDialog;
}(u.CastleExternalDialog);
exports.AccountBannedDialog = p;
p.__initialize_static_members();