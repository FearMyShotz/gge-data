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
var p = require("./2637.js");
var h = require("./21.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./217.js");
var m = require("./447.js");
var f = require("./271.js");
var O = require("./322.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./135.js");
var D = function (e) {
  function DecorationForgeRechargeEnergyDialog() {
    return e.call(this, DecorationForgeRechargeEnergyDialog.NAME) || this;
  }
  n.__extends(DecorationForgeRechargeEnergyDialog, e);
  DecorationForgeRechargeEnergyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], P.ClickFeedbackButton);
    E.ButtonHelper.initButtons([this.dialogDisp.mc_buyPremium.btn_buy], M.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_rechargeEnergy_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_options, new c.LocalizedTextVO("dialog_decoForge_rechargeEnergy_subtitle")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_title, new u.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_rechargeEnergy_premium_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_desc, new c.LocalizedTextVO("dialog_decoForge_rechargeEnergy_premium_subtitle")).autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "help";
    this._popoverComponent = new v.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new f.SimplePopoverConfig(_.ClientConstFusion.POPOVER_ASSET_NAME_ACTION));
    this.dialogDisp.mc_energyProgress.mouseChildren = false;
  };
  DecorationForgeRechargeEnergyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(m.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.addEventListener(m.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyRecharged));
    C.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._popoverComponent.onShow();
    this.updateAllInfos();
  };
  DecorationForgeRechargeEnergyDialog.prototype.hide = function () {
    this.controller.removeEventListener(m.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyRecharged));
    this.controller.removeEventListener(m.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    C.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._popoverComponent.onHide();
    e.prototype.hide.call(this);
  };
  DecorationForgeRechargeEnergyDialog.prototype.updateAllInfos = function () {
    this.updateEnergyProgress();
    this.updatePremiumRechargeInfo();
  };
  DecorationForgeRechargeEnergyDialog.prototype.updateEnergyProgress = function () {
    var e = C.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_energyProgress.txt_value, new c.LocalizedTextVO("value_proportional_value", [e.currentEnergy, e.getFullEnergy()]));
    this.updateEnergyProgressTooltip();
    var t = new O.SimpleProgressBarComponent(this.dialogDisp.mc_energyProgress, 379);
    t.setProgressByPercent(e.getCurrentEnergyFillFactor());
    t.fillMc = this.dialogDisp.mc_energyProgress.mc_overfill;
    t.setProgressByPercent(e.getCurrentEnergyOverfillFactor());
  };
  DecorationForgeRechargeEnergyDialog.prototype.updateEnergyProgressTooltip = function () {
    this.dialogDisp.mc_energyProgress.toolTipText = C.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).getEnergyProgressbarTooltipText();
  };
  DecorationForgeRechargeEnergyDialog.prototype.updatePremiumRechargeInfo = function () {
    var e = C.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_valueFrom, new l.LocalizedNumberVO(e.currentEnergy)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_valueTo, new l.LocalizedNumberVO(e.getEnergyAfterPremiumSkip())).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.txt_info, new c.LocalizedTextVO("dialog_decoForge_rechargeEnergy_premium_result", [_.ClientConstFusion.FULL_ENERGY_PERCENTAGE])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buyPremium.btn_buy.txt_value, new l.LocalizedNumberVO(e.getC2PriceForEnergyPremiumSkip())).autoFitToBounds = true;
    var t = e.getCurrentEnergyFillFactor() <= _.ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR;
    E.ButtonHelper.enableButton(this.dialogDisp.mc_buyPremium.btn_buy, t);
  };
  DecorationForgeRechargeEnergyDialog.prototype.showPopover = function (e) {
    d.int(e.FID);
    var t = d.int(e.FE);
    var i = this._popoverComponent.getAssetDisp();
    i.mc_icon.gotoAndStop(_.ClientConstFusion.ACTION_POPOVER_FRAME_ENERGY);
    this.textFieldManager.registerTextField(i.txt_text, new c.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [t])).autoFitToBounds = true;
    this._popoverComponent.startSequence();
  };
  DecorationForgeRechargeEnergyDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_buyPremium.btn_buy:
          this.onPremiumBuyButtonClicked();
          break;
        case this.dialogDisp.btn_help:
          y.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("dialog_decoForge_rechargeEnergy_help"));
      }
    }
  };
  DecorationForgeRechargeEnergyDialog.prototype.onPremiumBuyButtonClicked = function () {
    var e = new I.CollectableList();
    e.addItem(new T.CollectableItemC2VO(C.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).getC2PriceForEnergyPremiumSkip()));
    if (A.CostHelper.canAfford(new S.CollectablesCosts(e))) {
      C.CastleModel.smartfoxClient.sendCommandVO(new p.C2SSkipFusionRechargeEventVO(s.FusionConst.DECORATION_FORGE_ID, true));
      C.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).requestDataFromServer();
    } else {
      y.CastleExternalDialog.dialogHandler.registerDialogs(L.CastleNoMoneyC2Dialog, new b.CastleNoMoneyC2DialogProperties());
    }
  };
  DecorationForgeRechargeEnergyDialog.prototype.onFusionForgeInfoUpdated = function (e) {
    this.updateAllInfos();
  };
  DecorationForgeRechargeEnergyDialog.prototype.onTimer = function (e) {
    this.updateEnergyProgressTooltip();
  };
  DecorationForgeRechargeEnergyDialog.prototype.onEnergyRecharged = function (e) {
    this.showPopover(e.params[0]);
    this.updateAllInfos();
  };
  DecorationForgeRechargeEnergyDialog.__initialize_static_members = function () {
    DecorationForgeRechargeEnergyDialog.NAME = "DecorationForgeRechargeEnergy";
  };
  return DecorationForgeRechargeEnergyDialog;
}(y.CastleExternalDialog);
exports.DecorationForgeRechargeEnergyDialog = D;
var I = require("./48.js");
var T = require("./128.js");
var v = require("./294.js");
var S = require("./367.js");
var A = require("./66.js");
var L = require("./138.js");
var P = require("./36.js");
var M = require("./121.js");
a.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();