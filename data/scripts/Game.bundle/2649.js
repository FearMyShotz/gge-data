Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./2650.js");
var p = require("./32.js");
var h = require("./31.js");
var g = require("./19.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./216.js");
var f = require("./447.js");
var O = require("./272.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./990.js");
var D = createjs.Point;
var I = function (e) {
  function DecorationForgeUpgradeDialog() {
    return e.call(this, DecorationForgeUpgradeDialog.NAME) || this;
  }
  n.__extends(DecorationForgeUpgradeDialog, e);
  DecorationForgeUpgradeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], P.ClickFeedbackButton);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_add, this.dialogDisp.btn_levelUp], M.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_upgradeForge_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_levelTitle, new c.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("forgeLevel"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyTitle, new c.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_upgradeForge_energyCap"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyRechargeTitle, new c.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_upgradeForge_energyCharge"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_xpTitle, new c.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("bonusFusionXP"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_levelUp.txt_text, new l.LocalizedTextVO("dialog_decoForge_upgradeForge_levelUp")).autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "help";
    this._popoverComponent = new v.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new O.SimplePopoverConfig(m.ClientConstFusion.POPOVER_ASSET_NAME_ACTION));
  };
  DecorationForgeUpgradeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrenciesUpdated));
    this.controller.addEventListener(f.FusionForgeEvent.ON_FORGE_LEVEL_UP, this.bindFunction(this.onForgeLevelUp));
    this.controller.addEventListener(f.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this._popoverComponent.onShow();
    this.updateAllInfos();
  };
  DecorationForgeUpgradeDialog.prototype.hide = function () {
    this.controller.removeEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrenciesUpdated));
    this.controller.removeEventListener(f.FusionForgeEvent.ON_FORGE_LEVEL_UP, this.bindFunction(this.onForgeLevelUp));
    this.controller.removeEventListener(f.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this._popoverComponent.onHide();
    e.prototype.hide.call(this);
  };
  DecorationForgeUpgradeDialog.prototype.updateAllInfos = function () {
    this.updateForgeData();
    this.updateInfos();
    this.updateCost();
    this.updateLevelUpButton();
  };
  DecorationForgeUpgradeDialog.prototype.updateForgeData = function () {
    this._forgeData = _.CastleModel.fusionForgeData.getForge(a.FusionConst.DECORATION_FORGE_ID);
  };
  DecorationForgeUpgradeDialog.prototype.updateInfos = function () {
    var e = this._forgeData.level;
    var t = e + 1;
    var i = 0;
    var n = 0;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_levelFrom, new l.LocalizedTextVO("forgeLevel_value", [e]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_levelTo, new l.LocalizedTextVO("forgeLevel_value", [t]));
    i = u.int(a.FusionConst.getFusionEnergyCap(e));
    n = u.int(a.FusionConst.getFusionEnergyCap(t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyFrom, new r.LocalizedNumberVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyTo, new r.LocalizedNumberVO(n));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyToAdd, new l.LocalizedTextVO("value_brackets_add", [n - i]));
    m.ClientConstFusion.alignAddTextField(this.dialogDisp.txt_energyTo, this.dialogDisp.txt_energyToAdd);
    i = u.int(a.FusionConst.getFusionEnergyRechargeAmount(e));
    n = u.int(a.FusionConst.getFusionEnergyRechargeAmount(t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyRechargeFrom, new r.LocalizedNumberVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyRechargeTo, new r.LocalizedNumberVO(n));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_energyRechargeToAdd, new l.LocalizedTextVO("value_brackets_add", [n - i]));
    m.ClientConstFusion.alignAddTextField(this.dialogDisp.txt_energyRechargeTo, this.dialogDisp.txt_energyRechargeToAdd);
    i = u.int(a.FusionConst.getBonusFusionXPWithForgeMax(1, 1, e));
    n = u.int(a.FusionConst.getBonusFusionXPWithForgeMax(1, 1, t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_xpFrom, new r.LocalizedNumberVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_xpTo, new r.LocalizedNumberVO(n));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_xpToAdd, new l.LocalizedTextVO("value_brackets_add", [n - i]));
    m.ClientConstFusion.alignAddTextField(this.dialogDisp.txt_xpTo, this.dialogDisp.txt_xpToAdd);
  };
  DecorationForgeUpgradeDialog.prototype.updateCost = function () {
    S.CollectableRenderHelper.displaySingleItemComplete(this, new h.CollectableRenderClips(this.dialogDisp.mc_costs), this._forgeData.getCostForForgeLevelUp(), new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_COST_LIST, new D(30, 30)));
  };
  DecorationForgeUpgradeDialog.prototype.updateLevelUpButton = function () {
    E.ButtonHelper.enableButton(this.dialogDisp.btn_levelUp, A.CostHelper.canAfford(T.CollectableHelper.createCostList([this._forgeData.getCostForForgeLevelUp()])));
  };
  DecorationForgeUpgradeDialog.prototype.showPopover = function (e) {
    u.int(e.FID);
    var t = u.int(e.FL);
    var i = this._popoverComponent.getAssetDisp();
    i.mc_icon.gotoAndStop(m.ClientConstFusion.ACTION_POPOVER_FRAME_LEVEL);
    this.textFieldManager.registerTextField(i.txt_text, new l.LocalizedTextVO("forgeLevel_value", [t])).autoFitToBounds = true;
    this._popoverComponent.startSequence();
  };
  DecorationForgeUpgradeDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_levelUp:
          this.onLevelUpButtonClicked();
          break;
        case this.dialogDisp.btn_add:
          y.CastleExternalDialog.dialogHandler.registerDialogs(L.DecorationForgeCatalystConversionDialog, new b.DecorationForgeCatalystConversionDialogProperties());
          break;
        case this.dialogDisp.btn_help:
          y.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text("dialog_decoForge_upgradeForge_help"));
      }
    }
  };
  DecorationForgeUpgradeDialog.prototype.onLevelUpButtonClicked = function () {
    _.CastleModel.smartfoxClient.sendCommandVO(new d.C2SLevelUpFusionForgeEventVO(a.FusionConst.DECORATION_FORGE_ID));
  };
  DecorationForgeUpgradeDialog.prototype.onSpecialCurrenciesUpdated = function (e) {
    this.updateCost();
    this.updateLevelUpButton();
  };
  DecorationForgeUpgradeDialog.prototype.onForgeLevelUp = function (e) {
    this.updateAllInfos();
    this.showPopover(e.params[0]);
  };
  DecorationForgeUpgradeDialog.prototype.onFusionForgeInfoUpdated = function (e) {
    this.updateAllInfos();
  };
  DecorationForgeUpgradeDialog.__initialize_static_members = function () {
    DecorationForgeUpgradeDialog.NAME = "DecorationForgeUpgrade";
  };
  return DecorationForgeUpgradeDialog;
}(y.CastleExternalDialog);
exports.DecorationForgeUpgradeDialog = I;
var T = require("./45.js");
var v = require("./294.js");
var S = require("./25.js");
var A = require("./66.js");
var L = require("./991.js");
var P = require("./36.js");
var M = require("./121.js");
o.classImplementsInterfaces(I, "ICollectableRendererList");
I.__initialize_static_members();