Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./21.js");
var C = require("./26.js");
var _ = require("./396.js");
var m = require("./4.js");
var f = require("./8.js");
var O = require("./11.js");
var E = require("./167.js");
var y = function (e) {
  function CastlePlagueMonkEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePlagueMonkEventDialog.NAME) || this;
  }
  n.__extends(CastlePlagueMonkEventDialog, e);
  CastlePlagueMonkEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_addMonk]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new d.LocalizedTextVO("dialog_plagueEvent_speechBubble")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc1, new d.LocalizedTextVO("dialog_plagueEvent_desc1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new d.LocalizedTextVO("dialog_plagueEvent_desc2"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeBg.txt_time, new p.TextVO(""));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.btn_addMonk.mc_discount.txt_value, new d.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_time.textAlign = o.GGSTextAlign.LEFT;
    this.itxt_monkcount = this.textFieldManager.registerTextField(this.dialogDisp.mc_countBg.txt_monkCount, new u.LocalizedNumberVO(0));
  };
  CastlePlagueMonkEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    m.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onAddEvent));
    m.CastleModel.spyData.addEventListener(_.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPreSpyInfoUpdate));
    this.dialogDisp.mc_countBg.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.mc_timeBg.toolTipText = "resttime";
    this.onUpdateSpecialEvent(null);
    this.showMonkCount();
    this.showMonkDiscount();
  };
  CastlePlagueMonkEventDialog.prototype.onAddEvent = function (e) {
    if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.showMonkDiscount();
    }
  };
  CastlePlagueMonkEventDialog.prototype.onPreSpyInfoUpdate = function (e) {
    this.showMonkCount();
  };
  CastlePlagueMonkEventDialog.prototype.showMonkCount = function () {
    var e = h.int(m.CastleModel.spyData.totalPlagueMonks);
    var t = h.int(m.CastleModel.spyData.availablePlagueMonks);
    this.itxt_monkcount.textContentVO.numberValue = t;
    if (e < c.SpyConst.MAX_OWNABLE_PLAGUEMONKS) {
      f.ButtonHelper.enableButton(this.dialogDisp.btn_addMonk, true);
      this.dialogDisp.btn_addMonk.toolTipText = "dialog_plagueEvent_buyMonk";
    } else {
      f.ButtonHelper.enableButton(this.dialogDisp.btn_addMonk, false);
      this.dialogDisp.btn_addMonk.toolTipText = "dialog_plagueEvent_maxPlaguemonkCount";
    }
  };
  CastlePlagueMonkEventDialog.prototype.showMonkDiscount = function () {
    var e = 0;
    for (var t = 0; t < this.dialogProperties.plagueEventVO.eventPackages.length; t++) {
      if ((e = h.int(b.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.dialogProperties.plagueEventVO.eventPackages[t].packageID))) > 0) {
        this.itxt_discount.textContentVO.textReplacements = [-e];
        break;
      }
    }
    this.dialogDisp.btn_addMonk.mc_discount.visible = e != 0;
  };
  CastlePlagueMonkEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_addMonk:
        if (this.dialogDisp.btn_addMonk.enabled) {
          this.addPlagueMonks();
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastlePlagueMonkEventDialog.prototype.addPlagueMonks = function () {
    var e = new E.CastleGenericBuyDialogProperties();
    e.specialEventVO = this.dialogProperties.plagueEventVO;
    e.eventPackageVO = this.dialogProperties.plagueEventVO.eventPackages[0];
    O.CastleExternalDialog.dialogHandler.registerDefaultDialogs(D.CastlePlagueUnitEventBuyDialog, e);
  };
  CastlePlagueMonkEventDialog.prototype.onUpdateSpecialEvent = function (e) {
    this.itxt_time.textContentVO.stringValue = s.TimeStringHelper.getShortTimeStringBySeconds(this.dialogProperties.plagueEventVO.remainingEventTimeInSeconds);
  };
  CastlePlagueMonkEventDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_PLAGUE) {
      this.hide();
    } else if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.showMonkDiscount();
    }
  };
  CastlePlagueMonkEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    m.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
    m.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    m.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onAddEvent));
    m.CastleModel.spyData.removeEventListener(_.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPreSpyInfoUpdate));
  };
  Object.defineProperty(CastlePlagueMonkEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlagueMonkEventDialog.__initialize_static_members = function () {
    CastlePlagueMonkEventDialog.NAME = "CastlePlagueMonkEvent";
  };
  return CastlePlagueMonkEventDialog;
}(O.CastleExternalDialog);
exports.CastlePlagueMonkEventDialog = y;
var b = require("./190.js");
var D = require("./1406.js");
r.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();