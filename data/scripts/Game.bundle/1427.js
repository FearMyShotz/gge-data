Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./11.js");
var h = require("./244.js");
var g = function (e) {
  function CastleVIPBuyPointsTimeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleVIPBuyPointsTimeDialog.NAME) || this;
  }
  n.__extends(CastleVIPBuyPointsTimeDialog, e);
  CastleVIPBuyPointsTimeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_packageList.item0.btn_buy, this.dialogDisp.mc_packageList.item1.btn_buy, this.dialogDisp.mc_packageList.item2.btn_buy]);
    this.packageList = new o.ItemList(this.dialogDisp.mc_packageList);
    this.packageList.scrollItemClass = _.CastleVIPBuyPointsTimeItem;
  };
  CastleVIPBuyPointsTimeDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.setTexts();
    this.updatePackageList();
    this.updatePackageIcons();
  };
  CastleVIPBuyPointsTimeDialog.prototype.setTexts = function () {
    var e;
    var t;
    if (this.dialogProperties.packageType == C.CollectableEnum.VIP_POINTS) {
      e = "dialog_buyVipPoints_title_v2";
      t = "dialog_buyVipPoints_copy_v2";
    } else {
      e = "dialog_buyVipTime_title";
      t = "dialog_buyVipTime_copy_v2";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO(e));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(t, [s.PlayerConst.DAILY_VIP_POINTS_LOSS]));
  };
  CastleVIPBuyPointsTimeDialog.prototype.updatePackageIcons = function () {
    var e = l.int(this.dialogProperties.packageType == C.CollectableEnum.VIP_POINTS ? CastleVIPBuyPointsTimeDialog.ICON_VIP_POINTS_FRAME : CastleVIPBuyPointsTimeDialog.ICON_VIP_TIME_FRAME);
    for (var t = 0; t < CastleVIPBuyPointsTimeDialog.NUMBER_PACKAGE_ICONS; ++t) {
      this.dialogDisp["mc_icon" + t].gotoAndStop(e);
    }
  };
  CastleVIPBuyPointsTimeDialog.prototype.updatePackageList = function () {
    this.packageList.clear();
    var e = u.CastleModel.vipData.getPackages(this.dialogProperties.packageType);
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new h.MerchantScrollItemVO();
          o.eventPackageVO = n;
          this.packageList.pushContent(o);
        }
      }
    }
    this.packageList.initList();
  };
  CastleVIPBuyPointsTimeDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
  };
  CastleVIPBuyPointsTimeDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    this.packageList.clear();
  };
  CastleVIPBuyPointsTimeDialog.prototype.onEventsChange = function (e) {
    this.updatePackageList();
  };
  CastleVIPBuyPointsTimeDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleVIPBuyPointsTimeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleVIPBuyPointsTimeDialog.__initialize_static_members = function () {
    CastleVIPBuyPointsTimeDialog.NAME = "CastleBuyVIPPointsTime";
    CastleVIPBuyPointsTimeDialog.NUMBER_PACKAGE_ICONS = 3;
    CastleVIPBuyPointsTimeDialog.ICON_VIP_TIME_FRAME = 1;
    CastleVIPBuyPointsTimeDialog.ICON_VIP_POINTS_FRAME = 2;
  };
  return CastleVIPBuyPointsTimeDialog;
}(p.CastleExternalDialog);
exports.CastleVIPBuyPointsTimeDialog = g;
var C = require("./12.js");
var _ = require("./2617.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();