Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./16.js");
var h = require("./28.js");
var g = require("./4.js");
var C = require("./1351.js");
var _ = require("./8.js");
var m = function (e) {
  function CastleMovementSetTimeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleMovementSetTimeDialog.NAME) || this;
  }
  n.__extends(CastleMovementSetTimeDialog, e);
  CastleMovementSetTimeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.timeSelector = new C.TimeSelectionComponent(this.dialogDisp, "dialog_slowArmy_time_minTime_tooltip", "dialog_slowArmy_time_maxTime_tooltip", this.bindFunction(this.onTimeChanged));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_maxTime, this.dialogDisp.btn_reset]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_cost.toolTipText = "gold";
    this.dialogDisp.mc_cost.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_slowArmy_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new u.LocalizedTextVO("dialog_slowArmy_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new u.LocalizedTextVO("dialog_slowArmy_arrivalTime"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_dateTitle, new u.LocalizedTextVO("dialog_slowArmy_arrivalDate"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hoursTitle, new u.LocalizedTextVO("dialog_slowArmy_hours"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_minutesTitle, new u.LocalizedTextVO("dialog_slowArmy_minutes"));
    this.txt_arrival = this.textFieldManager.registerTextField(this.dialogDisp.txt_arrival, new u.LocalizedTextVO("dialog_slowArmy_arrival"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reset.txt_value, new u.LocalizedTextVO("dialog_slowArmy_reset")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_maxTime.txt_value, new u.LocalizedTextVO("dialog_slowArmy_maxDelay"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costTitle, new u.LocalizedTextVO("cost"));
    this.txt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_cost, new c.LocalizedNumberVO(0));
  };
  CastleMovementSetTimeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.timeSelector.show(this.dialogProperties.preselectedTime, this.dialogProperties.minDelayInSeconds, this.dialogProperties.maxDelayInSeconds);
  };
  CastleMovementSetTimeDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.timeSelector.hide();
  };
  CastleMovementSetTimeDialog.prototype.onTimeChanged = function () {
    var e = new Date();
    e.setTime(this.timeSelector.selectedTime);
    this.txt_arrival.textContentVO.textReplacements = [l.Localize.datetime(e, r.DateTimeStyle.SHORT, r.DateTimeStyle.NONE), l.Localize.datetime(e, r.DateTimeStyle.NONE, r.DateTimeStyle.SHORT)];
    var t = e.getTime() - this.minimumTime >= h.ClientConstTime.SEC_2_MILLISEC;
    var i = d.int(t ? s.TravelConst.SLOWDOWN_C2_COSTS : 0);
    this.txt_cost.textContentVO.numberValue = i;
    var n = g.CastleModel.currencyData.c2Amount >= i;
    this.txt_cost.color = n ? p.ClientConstColor.FONT_DEFAULT_COLOR : p.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    _.ButtonHelper.enableButton(this.dialogDisp.btn_maxTime, this.timeSelector.canIncreaseTime());
  };
  CastleMovementSetTimeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (_.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.acceptCurrentEditTime();
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          f.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_slowArmy"));
          break;
        case this.dialogDisp.btn_maxTime:
          this.timeSelector.reset(this.maximumTime);
          break;
        case this.dialogDisp.btn_reset:
          this.timeSelector.reset(this.minimumTime);
      }
    }
  };
  Object.defineProperty(CastleMovementSetTimeDialog.prototype, "maximumTime", {
    get: function () {
      return new Date().getTime() + this.dialogProperties.maxDelayInSeconds * h.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMovementSetTimeDialog.prototype, "minimumTime", {
    get: function () {
      return new Date().getTime() + this.dialogProperties.minDelayInSeconds * h.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementSetTimeDialog.prototype.acceptCurrentEditTime = function () {
    if (this.dialogProperties.timeWasSetCallback) {
      this.dialogProperties.timeWasSetCallback(this.timeSelector.selectedTime);
    }
  };
  Object.defineProperty(CastleMovementSetTimeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementSetTimeDialog.__initialize_static_members = function () {
    CastleMovementSetTimeDialog.NAME = "CastleMovementSetTime";
  };
  return CastleMovementSetTimeDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleMovementSetTimeDialog = m;
var f = require("./9.js");
a.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();