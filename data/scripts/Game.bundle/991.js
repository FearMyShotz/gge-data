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
var p = require("./21.js");
var h = require("./32.js");
var g = require("./31.js");
var C = require("./19.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./52.js");
var O = require("./216.js");
var E = require("./447.js");
var y = require("./272.js");
var b = require("./322.js");
var D = require("./42.js");
var I = require("./8.js");
var T = require("./11.js");
var v = require("./1443.js");
var S = createjs.Point;
var A = function (e) {
  function DecorationForgeCatalystConversionDialog() {
    return e.call(this, DecorationForgeCatalystConversionDialog.NAME) || this;
  }
  n.__extends(DecorationForgeCatalystConversionDialog, e);
  DecorationForgeCatalystConversionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    I.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_rechargeEnergy], k.ClickFeedbackButton);
    this.dialogDisp.addChild(this.dialogDisp.btn_rechargeEnergy);
    this.dialogDisp.addChild(this.dialogDisp.btn_close);
    this.dialogDisp.addChild(this.dialogDisp.btn_help);
    this.dialogDisp.addChild(this.dialogDisp.mc_list);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_catalystConversion_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_catalystTitle, new u.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_catalystConversion_catalysts"))).autoFitToBounds = true;
    this.dialogDisp.mc_decoDust.mouseChildren = false;
    this.dialogDisp.mc_energy.mouseChildren = false;
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.mc_decoDust.toolTipText = new M.CollectableItemGenericCurrencyVO(f.ClientConstCurrency.ID_DECO_DUST).getTooltipTextId();
    this.dialogDisp.mc_energy.toolTipText = "fusionEnergy";
    this.dialogDisp.btn_rechargeEnergy.toolTipText = "dialog_decoForge_forgeEnergyRecharge_tooltip";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_noSelection.txt_text, new c.LocalizedTextVO("dialog_decoForge_catalystConversion_desc")).verticalAlign = D.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._itemList = new x.DecorationForgeSelectionList(this.dialogDisp.mc_list, B.DecorationForgeCatalystConversionDialogListItemVE, 5);
    this._infoBoxDisassemble = new N.DecorationForgeCatalystConversionDialogInfoBoxDisassemble(this.dialogDisp.mc_disassemble);
    this._infoBoxAssemble = new F.DecorationForgeCatalystConversionDialogInfoBoxAssemble(this.dialogDisp.mc_assemble);
    this._popoverComponent = new V.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new y.SimplePopoverConfig(O.ClientConstFusion.POPOVER_ASSET_NAME_ACTION));
  };
  DecorationForgeCatalystConversionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._itemList.onShow();
    this._infoBoxAssemble.onShow();
    this._infoBoxDisassemble.onShow();
    this._popoverComponent.onShow();
    this.controller.addEventListener(E.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.addEventListener(E.FusionForgeEvent.ON_CATALYST_CONVERSION_DONE, this.bindFunction(this.onCatalystConversionDone));
    this.controller.addEventListener(h.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    m.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._itemList.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this._infoBoxAssemble.onButtonsChanged.add(this.bindFunction(this.onInfoBoxButtonsChanged));
    this._infoBoxDisassemble.onButtonsChanged.add(this.bindFunction(this.onInfoBoxButtonsChanged));
    this.updateAllInfos();
  };
  DecorationForgeCatalystConversionDialog.prototype.hide = function () {
    this.controller.removeEventListener(E.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.removeEventListener(E.FusionForgeEvent.ON_CATALYST_CONVERSION_DONE, this.bindFunction(this.onCatalystConversionDone));
    this.controller.removeEventListener(h.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    m.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._itemList.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    this._infoBoxAssemble.onButtonsChanged.remove(this.bindFunction(this.onInfoBoxButtonsChanged));
    this._infoBoxDisassemble.onButtonsChanged.remove(this.bindFunction(this.onInfoBoxButtonsChanged));
    this._itemList.onHide();
    this._infoBoxAssemble.onHide();
    this._infoBoxDisassemble.onHide();
    this._popoverComponent.onHide();
    e.prototype.hide.call(this);
  };
  DecorationForgeCatalystConversionDialog.prototype.updateAllInfos = function () {
    this.updateDustInfo();
    this.updateEnergyInfo();
    this.updateList();
    this.updateInfoBoxes();
    this.updateNoSelectionInfo();
  };
  DecorationForgeCatalystConversionDialog.prototype.updateDustInfo = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_decoDust.txt_amount, new l.LocalizedNumberVO(m.CastleModel.currencyData.getAmountById(f.ClientConstCurrency.ID_DECO_DUST)));
  };
  DecorationForgeCatalystConversionDialog.prototype.updateEnergyInfo = function () {
    var e = m.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_energy.txt_amount, new c.LocalizedTextVO("value_proportional_value", [e.currentEnergy, e.getFullEnergy()]));
    this.updateEnergyProgressTooltip();
    var t = new b.SimpleProgressBarComponent(this.dialogDisp.mc_energyProgress, 238);
    t.setProgressByPercent(e.getCurrentEnergyFillFactor());
    t.fillMc = this.dialogDisp.mc_energyProgress.mc_overfill;
    t.setProgressByPercent(e.getCurrentEnergyOverfillFactor());
  };
  DecorationForgeCatalystConversionDialog.prototype.updateEnergyProgressTooltip = function () {
    this.dialogDisp.mc_energyProgress.toolTipText = m.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).getEnergyProgressbarTooltipText();
  };
  DecorationForgeCatalystConversionDialog.prototype.updateList = function () {
    var e = m.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).getAvailableCatalysts();
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.push(new v.DecorationForgeSelectionListItemVO(o, o.equals(this.dialogProperties.preselectedCatalystVO)));
        }
      }
    }
    this._itemList.updateWithNewData(t);
  };
  DecorationForgeCatalystConversionDialog.prototype.updateInfoBoxes = function (e = true) {
    var t = this._itemList.getSelectedItemVO();
    var i = t ? t.data : null;
    this._infoBoxDisassemble.updateWithNewData(i, e);
    this._infoBoxAssemble.updateWithNewData(i, e);
    this.updateInfoBoxOverlays();
  };
  DecorationForgeCatalystConversionDialog.prototype.updateInfoBoxOverlays = function () {
    this._infoBoxDisassemble.setOverlay(this._infoBoxAssemble.isShowingConfirmButtons);
    this._infoBoxAssemble.setOverlay(this._infoBoxDisassemble.isShowingConfirmButtons);
  };
  DecorationForgeCatalystConversionDialog.prototype.updateNoSelectionInfo = function () {
    this.dialogDisp.mc_noSelection.visible = this._itemList.getSelectedItemVO() == null;
  };
  DecorationForgeCatalystConversionDialog.prototype.showPopover = function (e) {
    var t = d.int(e.FID);
    var i = d.int(e.FCCD);
    var n = d.int(e.FCID);
    var a = d.int(e.FCCA);
    var s = this._popoverComponent.getAssetDisp();
    if (i == O.ClientConstFusion.CATALYST_CONVERSION_DIRECTION_ASSEMBLE) {
      s.mc_icon.gotoAndStop(O.ClientConstFusion.ACTION_POPOVER_FRAME_CUSTOM);
      var r = new R.CollectableRenderer(new g.CollectableRenderClips(s.mc_icon), new C.CollectableRenderOptions(C.CollectableRenderOptions.ICON, new S(60, 60)));
      r.updateWithNewVO(P.CollectableHelper.createVO(L.CollectableEnum.GENERIC_CURRENCY, a, n));
      r.destroy();
      this.textFieldManager.registerTextField(s.txt_text, new c.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [a]));
    } else {
      s.mc_icon.gotoAndStop(O.ClientConstFusion.ACTION_POPOVER_FRAME_DUST);
      var l = m.CastleModel.fusionForgeData.xml.getCatalystInfo(t, n);
      this.textFieldManager.registerTextField(s.txt_text, new c.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [l.addDecoDust * a]));
    }
    this._popoverComponent.startSequence();
  };
  DecorationForgeCatalystConversionDialog.prototype.onClick = function (t) {
    if (I.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_rechargeEnergy:
          T.CastleExternalDialog.dialogHandler.registerDefaultDialogs(w.DecorationForgeRechargeEnergyDialog);
          break;
        case this.dialogDisp.btn_help:
          T.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("dialog_decoForge_catalystConversion_help"));
      }
    }
  };
  DecorationForgeCatalystConversionDialog.prototype.onSelectionChanged = function () {
    this.updateInfoBoxes();
    this.updateNoSelectionInfo();
  };
  DecorationForgeCatalystConversionDialog.prototype.onCurrenciesUpdated = function (e) {
    this.updateDustInfo();
    this.updateInfoBoxes(false);
  };
  DecorationForgeCatalystConversionDialog.prototype.onFusionForgeInfoUpdated = function (e) {
    this.updateEnergyInfo();
    this.updateInfoBoxes(false);
  };
  DecorationForgeCatalystConversionDialog.prototype.onTimer = function (e) {
    this.updateEnergyProgressTooltip();
  };
  DecorationForgeCatalystConversionDialog.prototype.onInfoBoxButtonsChanged = function () {
    this.updateInfoBoxOverlays();
  };
  DecorationForgeCatalystConversionDialog.prototype.onCatalystConversionDone = function (e) {
    this.showPopover(e.params[0]);
  };
  Object.defineProperty(DecorationForgeCatalystConversionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeCatalystConversionDialog.__initialize_static_members = function () {
    DecorationForgeCatalystConversionDialog.NAME = "DecorationForgeCatalystConversion";
  };
  return DecorationForgeCatalystConversionDialog;
}(T.CastleExternalDialog);
exports.DecorationForgeCatalystConversionDialog = A;
var L = require("./12.js");
var P = require("./45.js");
var M = require("./155.js");
var R = require("./186.js");
var V = require("./294.js");
var x = require("./1444.js");
var w = require("./992.js");
var B = require("./2637.js");
var F = require("./2638.js");
var N = require("./2640.js");
var k = require("./36.js");
a.classImplementsInterfaces(A, "ICollectableRendererList");
A.__initialize_static_members();