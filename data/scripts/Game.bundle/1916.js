Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./26.js");
var c = require("./32.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./11.js");
var h = require("./4473.js");
var g = function (e) {
  function CastleLuckyWheelTicketBuyDialog() {
    return e.call(this, CastleLuckyWheelTicketBuyDialog.NAME) || this;
  }
  n.__extends(CastleLuckyWheelTicketBuyDialog, e);
  CastleLuckyWheelTicketBuyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_packageList.item0.btn_buy, this.dialogDisp.mc_packageList.item1.btn_buy, this.dialogDisp.mc_packageList.item2.btn_buy]);
    this.packageList = new o.ItemList(this.dialogDisp.mc_packageList);
    this.packageList.scrollItemClass = C.CastleLuckyWheelScrollItem;
  };
  CastleLuckyWheelTicketBuyDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.setTexts();
    this.updatePackageList();
  };
  CastleLuckyWheelTicketBuyDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    u.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    u.CastleModel.specialEventData.addEventListener(c.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
  };
  CastleLuckyWheelTicketBuyDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    u.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    u.CastleModel.specialEventData.removeEventListener(c.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
  };
  CastleLuckyWheelTicketBuyDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_luckyWheel_buyTickets"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO("dialog_luckyWheel_buyTickets_text"));
  };
  CastleLuckyWheelTicketBuyDialog.prototype.updatePackageList = function () {
    this.packageList.clear();
    var e;
    var t = u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_LUCKYWHEEL);
    var i = t.eventPackagesVO.getVisiblePackages(u.CastleModel.userData.userLevel, u.CastleModel.userData.userLegendLevel, u.CastleModel.areaData.activeAreaInfo.areaType);
    var n = 1;
    if (i != null) {
      for (var o = 0, a = i; o < a.length; o++) {
        var r = a[o];
        if (r !== undefined) {
          (e = new h.CastleLuckyWheelScrollItemVO()).eventPackageVO = r;
          e.specialEventVO = t;
          e.ticketsToDisplay = n;
          this.packageList.pushContent(e);
          n++;
        }
      }
    }
    this.packageList.initList();
  };
  CastleLuckyWheelTicketBuyDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleLuckyWheelTicketBuyDialog.prototype.onUserLifetimeSpentChanged = function (e) {
    this.updatePackageList();
  };
  CastleLuckyWheelTicketBuyDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_LUCKYWHEEL) {
      this.hide();
    } else {
      this.updatePackageList();
    }
  };
  CastleLuckyWheelTicketBuyDialog.prototype.onRefreshSpecialEvent = function (e) {
    this.updatePackageList();
  };
  CastleLuckyWheelTicketBuyDialog.NAME = "CastleLuckyWheelTicketBuy";
  return CastleLuckyWheelTicketBuyDialog;
}(p.CastleExternalDialog);
exports.CastleLuckyWheelTicketBuyDialog = g;
var C = require("./4474.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");