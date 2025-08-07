Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./16.js");
var p = require("./60.js");
var h = require("./39.js");
var g = require("./21.js");
var C = require("./4.js");
var _ = require("./130.js");
var m = require("./27.js");
var f = require("./307.js");
var O = require("./1744.js");
var E = require("./11.js");
var y = createjs.MovieClip;
var b = function (e) {
  function CastlePrivateOfferRubymineDialog() {
    return e.call(this, CastlePrivateOfferRubymineDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferRubymineDialog, e);
  Object.defineProperty(CastlePrivateOfferRubymineDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferRubymineDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_buy, this.dialogDisp.btn_close]);
    this.mc_tooltip = new Library.CastleInterfaceElements.DecoShopPanel_BuildingTooltip();
  };
  CastlePrivateOfferRubymineDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = this.dialogProperties.offerVO.getAdditionalComponentByName(p.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID).ID;
    var n = C.CastleModel.wodData.createVObyWOD(i, D.CastleWodData.TYPE_BUILDING);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.LocalizedTextVO("dialog_rubymine_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_shortDescription, new l.LocalizedTextVO("dialog_rubymine_desc_detail"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_specialLabel, new l.LocalizedTextVO("dialog_specialOffer_banner_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_publicOrder.txt_value, new c.TextVO(n.decoPoints.toString()));
    this.dialogDisp.mc_publicOrder.mouseChildren = false;
    this.dialogDisp.mc_publicOrder.toolTipText = "dialog_buildingInfo_publicOrder";
    this.dialogDisp.btn_buy.toolTipText = "build";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_costs, new r.LocalizedNumberVO(n.costC2)).color = n.costC2 > C.CastleModel.currencyData.c2Amount ? d.ClientConstColor.FONT_INSUFFICIENT_COLOR : d.ClientConstColor.FONT_DEFAULT_COLOR;
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = h.ClientConstTextIds.C2;
    var s = n.mineTypeId;
    var g = C.CastleModel.mineData.getMineVOByObjectID(s);
    var _ = g.totalAmount;
    var m = g.totalLootableAmount * g.waitingTime;
    var f = u.int(m / 60 / 60 / 24);
    var O = a.MathBase.floor(_ / n.costC2, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_detailedDescription, new l.LocalizedTextVO("alert_rubymine_bonustext", [f, O]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new c.TextVO("")).textAlign = o.GGSTextAlign.LEFT;
    this.onUpdateEventTime(null);
    this.dialogDisp.icon_mine.mouseChildren = false;
  };
  CastlePrivateOfferRubymineDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.showToolTip();
  };
  CastlePrivateOfferRubymineDialog.prototype.showToolTip = function () {
    var e = this.dialogProperties.offerVO.getVisualComponentByName(p.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    var t = u.int(e.dialogCustomization.BID);
    var i = C.CastleModel.wodData.createVObyWOD(t, D.CastleWodData.TYPE_BUILDING);
    f.DecoBuildingToolTipManager.showToolTip(this.dialogDisp.icon_mine, i);
  };
  CastlePrivateOfferRubymineDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    f.DecoBuildingToolTipManager.hideToolTip();
  };
  CastlePrivateOfferRubymineDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    C.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    C.CastleModel.privateOfferData.addEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastlePrivateOfferRubymineDialog.prototype.removeEventListenerOnHide = function () {
    C.CastleModel.privateOfferData.removeEventListener(_.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    C.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    e.prototype.removeEventListenerOnHide.call(this);
  };
  CastlePrivateOfferRubymineDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_buy:
        this.onBuildingBuy();
    }
  };
  CastlePrivateOfferRubymineDialog.prototype.onBuildingBuy = function () {
    var e = this.dialogProperties.offerVO.getAdditionalComponentByName(p.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID);
    this.layoutManager.showEventBuildingPanel(new O.CastleEventBuildingPanelProperties(e.ID, this.dialogProperties.offerVO));
  };
  CastlePrivateOfferRubymineDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target instanceof y) {
      this.mc_tooltip.visible = t.target == this.dialogDisp.icon_mine || t.target == this.dialogDisp.mc_tooltip;
      if (t.target == this.dialogDisp.icon_mine || t.target == this.dialogDisp.mc_tooltip) {
        this.showToolTip();
      } else {
        f.DecoBuildingToolTipManager.hideToolTip();
      }
    }
  };
  CastlePrivateOfferRubymineDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.mc_tooltip.visible = false;
    f.DecoBuildingToolTipManager.hideToolTip();
  };
  CastlePrivateOfferRubymineDialog.prototype.onUpdateEventTime = function (e) {
    var t = u.int(this.dialogProperties.offerVO.remainingSeconds);
    m.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, t);
    m.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, t);
  };
  CastlePrivateOfferRubymineDialog.prototype.onOfferRemoved = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePrivateOfferRubymineDialog.__initialize_static_members = function () {
    CastlePrivateOfferRubymineDialog.NAME = "CastlePrivateOfferRubymine";
  };
  return CastlePrivateOfferRubymineDialog;
}(E.CastleExternalDialog);
exports.CastlePrivateOfferRubymineDialog = b;
var D = require("./56.js");
s.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();