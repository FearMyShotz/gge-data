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
var d = require("./60.js");
var p = require("./146.js");
var h = require("./21.js");
var g = require("./4.js");
var C = require("./130.js");
var _ = require("./226.js");
var m = require("./27.js");
var f = require("./307.js");
var O = require("./1744.js");
var E = require("./11.js");
var y = createjs.MovieClip;
var b = function (e) {
  function CastlePrivateOfferCoinmineDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferCoinmineDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferCoinmineDialog, e);
  Object.defineProperty(CastlePrivateOfferCoinmineDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferCoinmineDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_build, this.dialogDisp.btn_close, this.dialogDisp.mc_progress.btn_payment]);
    this.mc_tooltip = new Library.CastleInterfaceElements.DecoShopPanel_BuildingTooltip();
  };
  CastlePrivateOfferCoinmineDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = this.dialogProperties.offerVO.getAdditionalComponentByName(d.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID).ID;
    var n = g.CastleModel.wodData.createVObyWOD(i, D.CastleWodData.TYPE_BUILDING);
    var a = n.mineTypeId;
    var s = g.CastleModel.mineData.getMineVOByObjectID(a);
    var p = s.totalAmount;
    var h = s.totalLootableAmount;
    var C = s.waitingTime;
    var m = u.int(s.amountPerCollect);
    var f = h * C;
    var O = u.int(f / 60 / 60 / 24);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_short_description, new l.LocalizedTextVO("alert_goldmine_bonustext", [new r.LocalizedNumberVO(O), new r.LocalizedNumberVO(p)]));
    this.dialogDisp.mc_progress.btn_payment.toolTipText = "add_gold";
    this.dialogDisp.mc_progress.mc_progbarcontainer.toolTipText = "panel_quest_progress";
    this.dialogDisp.mc_progress.mc_progbarcontainer.mouseChildren = false;
    this.dialogDisp.mc_progress.icon_ruby.toolTipText = "gold";
    var E = c.Localize.number(n.decoPoints);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_publicOrder.txt_value, new c.TextVO(E));
    this.dialogDisp.mc_publicOrder.mouseChildren = false;
    this.dialogDisp.mc_publicOrder.toolTipText = "dialog_buildingInfo_publicOrder";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_remaning_time, new c.TextVO("")).textAlign = o.GGSTextAlign.LEFT;
    if (this.dialogProperties.offerVO.offerState === _.PrivateOfferStateEnum.OFFER_PENDING || this.dialogProperties.offerVO.offerState === _.PrivateOfferStateEnum.OFFER_READY) {
      this.setBuildAbleState();
    } else {
      this.setOfferProgressState(O, m);
    }
    this.onUpdateEventTime(null);
    this.dialogDisp.icon_mine.mouseChildren = false;
  };
  CastlePrivateOfferCoinmineDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
  };
  CastlePrivateOfferCoinmineDialog.prototype.showToolTip = function () {
    var e = this.dialogProperties.offerVO.getVisualComponentByName(d.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    var t = u.int(e.dialogCustomization.BID);
    var i = g.CastleModel.wodData.createVObyWOD(t, D.CastleWodData.TYPE_BUILDING);
    f.DecoBuildingToolTipManager.showToolTip(this.dialogDisp.icon_mine, i);
  };
  CastlePrivateOfferCoinmineDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    f.DecoBuildingToolTipManager.hideToolTip();
  };
  CastlePrivateOfferCoinmineDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    g.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    g.CastleModel.privateOfferData.addEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    g.CastleModel.privateOfferData.addEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
    g.CastleModel.privateOfferData.addEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferUpdated));
  };
  CastlePrivateOfferCoinmineDialog.prototype.removeEventListenerOnHide = function () {
    g.CastleModel.privateOfferData.removeEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    g.CastleModel.privateOfferData.removeEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
    g.CastleModel.privateOfferData.removeEventListener(C.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferUpdated));
    g.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    e.prototype.removeEventListenerOnHide.call(this);
  };
  CastlePrivateOfferCoinmineDialog.prototype.onOfferUpdated = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      if (this.dialogProperties.offerVO.offerState === _.PrivateOfferStateEnum.OFFER_PENDING || this.dialogProperties.offerVO.offerState === _.PrivateOfferStateEnum.OFFER_READY) {
        this.setBuildAbleState();
      } else {
        this.setProgress();
      }
    }
  };
  CastlePrivateOfferCoinmineDialog.prototype.setOfferProgressState = function (e, t) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.LocalizedTextVO("dialog_coinmine_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_condition, new l.LocalizedTextVO("dialog_coinmine_desc_detail", [e, t]));
    this.setProgress();
  };
  CastlePrivateOfferCoinmineDialog.prototype.setBuildAbleState = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.LocalizedTextVO("dialog_coinmine_desc_bought")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_condition, new l.LocalizedTextVO("dialog_coinmine_desc_bought_detail"));
    this.setBuildBtn();
    this.dialogDisp.btn_build.toolTipText = "build";
  };
  CastlePrivateOfferCoinmineDialog.prototype.setProgress = function () {
    var e = this.dialogProperties.offerVO.getQuestConditionByName(d.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE);
    var t = e.conditionTextReplacements[0];
    var i = e.conditionTextReplacements[1];
    this.dialogDisp.mc_progress.visible = true;
    this.dialogDisp.btn_build.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_progress, new l.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new r.LocalizedNumberVO(t), new r.LocalizedNumberVO(i)])).autoFitToBounds;
    this.dialogDisp.mc_progress.mc_progbarcontainer.progress_bar.scaleX = t / i;
  };
  CastlePrivateOfferCoinmineDialog.prototype.setBuildBtn = function () {
    this.dialogDisp.mc_progress.visible = false;
    this.dialogDisp.btn_build.visible = true;
  };
  CastlePrivateOfferCoinmineDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.mc_progress.btn_payment:
        p.CastleOpenShopExecutor.open(p.CastleOpenShopExecutor.SOURCE_PRIVATE_OFFER_COINMINE, I.CXFSourceTrackingConstants.SOURCE_PRIVATE_OFFER_COINMINE);
        break;
      case this.dialogDisp.btn_build:
        this.onBuildingBuy();
        this.hide();
    }
  };
  CastlePrivateOfferCoinmineDialog.prototype.onMouseOver = function (t) {
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
  CastlePrivateOfferCoinmineDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.mc_tooltip.visible = false;
    f.DecoBuildingToolTipManager.hideToolTip();
  };
  CastlePrivateOfferCoinmineDialog.prototype.onBuildingBuy = function () {
    var e = this.dialogProperties.offerVO.getAdditionalComponentByName(d.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID);
    this.layoutManager.showEventBuildingPanel(new O.CastleEventBuildingPanelProperties(e.ID, this.dialogProperties.offerVO));
  };
  CastlePrivateOfferCoinmineDialog.prototype.onUpdateEventTime = function (e) {
    var t = u.int(this.dialogProperties.offerVO.remainingSeconds);
    m.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_remaning_time, t, null, null, true);
    m.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, t);
  };
  CastlePrivateOfferCoinmineDialog.prototype.onOfferRemoved = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePrivateOfferCoinmineDialog.__initialize_static_members = function () {
    CastlePrivateOfferCoinmineDialog.NAME = "CastlePrivateOfferCoinmine";
  };
  return CastlePrivateOfferCoinmineDialog;
}(E.CastleExternalDialog);
exports.CastlePrivateOfferCoinmineDialog = b;
var D = require("./56.js");
var I = require("./108.js");
s.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();