Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./21.js");
var h = require("./26.js");
var g = require("./4.js");
var C = require("./11.js");
var _ = function (e) {
  function CastlePrimeAlliBonusDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrimeAlliBonusDialog.NAME) || this;
  }
  n.__extends(CastlePrimeAlliBonusDialog, e);
  CastlePrimeAlliBonusDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_showMe]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_alliancePA_title")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new u.LocalizedTextVO("dialog_alliancePA_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_showMe, new u.LocalizedTextVO("dialog_questInfo_showMe"));
    this.itxt_percent = this.textFieldManager.registerTextField(this.dialogDisp.txt_percent, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD));
    this.itxt_copy3 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new u.LocalizedTextVO("dialog_alliancePA_copy3"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new d.TextVO(""));
    this.dialogDisp.btn_showMe.toolTipText = "dialog_questInfo_showMe";
  };
  CastlePrimeAlliBonusDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.setCopyTexts();
  };
  CastlePrimeAlliBonusDialog.prototype.setCopyTexts = function () {
    if (this.eventVO) {
      this.itxt_percent.textContentVO.textReplacements = [this.eventVO.primeFactorInPercent];
      this.itxt_copy3.textContentVO.textReplacements = [CastlePrimeAlliBonusDialog.EXAMPLE_GOLD, (1 + this.eventVO.primeFactorInPercent * 0.01) * CastlePrimeAlliBonusDialog.EXAMPLE_GOLD];
    } else {
      this.hide();
    }
  };
  CastlePrimeAlliBonusDialog.prototype.removeEventListenerOnHide = function () {
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onPrimeAlliBonusEnd));
    g.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastlePrimeAlliBonusDialog.prototype.addEventListenerOnShow = function () {
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onPrimeAlliBonusEnd));
    g.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastlePrimeAlliBonusDialog.prototype.onPrimeAlliBonusEnd = function (e) {
    if (l.instanceOfClass(e.specialEventVO, "PrimeAlliBonusEventVO")) {
      this.hide();
    }
  };
  CastlePrimeAlliBonusDialog.prototype.onUpdateEventTime = function (e) {
    this.itxt_time.textContentVO.stringValue = f.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastlePrimeAlliBonusDialog.prototype, "eventVO", {
    get: function () {
      return g.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_ALLIPRIME);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeAlliBonusDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_ok) {
      this.hide();
    } else if (t.target == this.dialogDisp.btn_showMe) {
      C.CastleExternalDialog.dialogHandler.registerDefaultDialogs(m.CastleAllianceDonateDialog, null, true, o.BasicDialogHandler.PRIORITY_MIDDLE);
      this.hide();
    }
  };
  CastlePrimeAlliBonusDialog.__initialize_static_members = function () {
    CastlePrimeAlliBonusDialog.NAME = "CastlePrimeAlliBonusExternal";
    CastlePrimeAlliBonusDialog.EXAMPLE_GOLD = 2500;
  };
  return CastlePrimeAlliBonusDialog;
}(C.CastleExternalDialog);
exports.CastlePrimeAlliBonusDialog = _;
var m = require("./1388.js");
var f = require("./27.js");
r.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();