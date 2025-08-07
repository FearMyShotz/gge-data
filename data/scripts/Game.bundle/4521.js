Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./21.js");
var l = require("./4.js");
var c = require("./27.js");
var u = require("./256.js");
var d = function (e) {
  function CastleSamuraiHunterEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSamuraiHunterEventDialog.NAME) || this;
  }
  n.__extends(CastleSamuraiHunterEventDialog, e);
  CastleSamuraiHunterEventDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    l.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTick));
  };
  CastleSamuraiHunterEventDialog.prototype.onTick = function (e) {
    this.updateTimer();
  };
  CastleSamuraiHunterEventDialog.prototype.updateTimer = function () {
    this.itxt_time.textContentVO.stringValue = c.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.buyPackageEventVO.remainingEventTimeInSeconds);
    this.dialogDisp.mc_timer.toolTipText = c.CastleTimeStringHelper.getEventToolTipString(this.dialogProperties.buyPackageEventVO.remainingEventTimeInSeconds);
  };
  CastleSamuraiHunterEventDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    l.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTick));
  };
  CastleSamuraiHunterEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO("dialog_samuraiToolVendor_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_detailedDescription, new a.LocalizedTextVO("dialog_samuraiToolVendor_desc_detail")).autoFitToBounds = true;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new s.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.dialogDisp.mc_timer.mouseChildren = false;
  };
  CastleSamuraiHunterEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateTimer();
  };
  Object.defineProperty(CastleSamuraiHunterEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return p.CastleSamuraiHunterEventScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleSamuraiHunterEventDialog.__initialize_static_members = function () {
    CastleSamuraiHunterEventDialog.NAME = "CastleSamuraiHunterEvent";
  };
  return CastleSamuraiHunterEventDialog;
}(u.CastleGenericMerchantDialog);
exports.CastleSamuraiHunterEventDialog = d;
var p = require("./4522.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();