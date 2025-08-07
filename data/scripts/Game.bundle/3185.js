Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./39.js");
var h = require("./778.js");
var g = require("./21.js");
var C = require("./442.js");
var _ = require("./4.js");
var m = require("./259.js");
var f = require("./8.js");
var O = function (e) {
  function CastleMercenarySkipMissionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleMercenarySkipMissionDialog.NAME) || this;
  }
  n.__extends(CastleMercenarySkipMissionDialog, e);
  CastleMercenarySkipMissionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_mission_running")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.dialogDisp.mc_c2.mouseChildren = false;
    this.dialogDisp.mc_c2.toolTipText = p.ClientConstTextIds.C2;
    this.dialogDisp.mc_missionInfo.mc_progress.mc_bar.gotoAndStop(1);
    this.dialogDisp.mc_missionInfo.mc_progress.mouseChildren = false;
    this.dialogDisp.mc_missionInfo.mc_progress.toolTipText = "resttime";
    this.progressBar = new o.BasicProgressBar(this.dialogDisp.mc_missionInfo.mc_progress.mc_bar);
    this.timerTextField = this.textFieldManager.registerTextField(this.dialogDisp.mc_missionInfo.mc_progress.txt_progress, new d.TextVO(""));
  };
  CastleMercenarySkipMissionDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_missionInfo.txt_missionType, new u.LocalizedTextVO(this.dialogProperties.missionVO.getMissionTypeTextID()));
    this.timerComponent = new m.CastleTimerComponent(this.timerTextField, this.bindFunction(this.getRemainingTimeString), this.dialogProperties.missionVO.remainingTime);
    this.timerComponent.addEventListener(C.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    _.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
    this.updateProgress(null);
  };
  CastleMercenarySkipMissionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    f.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true);
  };
  CastleMercenarySkipMissionDialog.prototype.getRemainingTimeString = function (e) {
    return s.TimeStringHelper.getTimeToString(this.dialogProperties.missionVO.remainingTime, s.TimeStringHelper.TWO_TIME_FORMAT, l.Localize.text);
  };
  CastleMercenarySkipMissionDialog.prototype.updateProgress = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new u.LocalizedTextVO("dialog_mission_running_desc", [l.Localize.integer(this.dialogProperties.missionVO.skipCost)]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_c2.txt_value, new c.LocalizedNumberVO(this.dialogProperties.missionVO.skipCost));
    this.progressBar.scaleX = this.dialogProperties.missionVO.missionProgress;
  };
  CastleMercenarySkipMissionDialog.prototype.onTimerExpired = function (e) {
    this.hide();
  };
  CastleMercenarySkipMissionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.confirmSkip();
      }
    }
  };
  CastleMercenarySkipMissionDialog.prototype.confirmSkip = function () {
    _.CastleModel.smartfoxClient.sendCommandVO(new h.C2SMercenaryPackageVO(this.dialogProperties.missionVO.missionID));
    if (_.CastleModel.currencyData.c2Amount >= this.dialogProperties.missionVO.skipCost) {
      this.dialogProperties.confirmStartCallback();
    }
    this.hide();
  };
  CastleMercenarySkipMissionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.timerComponent.stop();
    this.timerComponent.removeEventListener(C.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    _.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
  };
  Object.defineProperty(CastleMercenarySkipMissionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenarySkipMissionDialog.__initialize_static_members = function () {
    CastleMercenarySkipMissionDialog.NAME = "CastleMercenarySkipMission";
  };
  return CastleMercenarySkipMissionDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleMercenarySkipMissionDialog = O;
r.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();