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
var p = require("./2633.js");
var h = require("./218.js");
var g = require("./21.js");
var C = require("./219.js");
var _ = require("./32.js");
var m = require("./153.js");
var f = require("./71.js");
var O = require("./31.js");
var E = require("./19.js");
var y = require("./13.js");
var b = require("./4.js");
var D = require("./52.js");
var I = require("./217.js");
var T = require("./447.js");
var v = require("./271.js");
var S = require("./322.js");
var A = require("./42.js");
var L = require("./682.js");
var P = require("./8.js");
var M = require("./11.js");
var R = require("./135.js");
var V = require("./989.js");
var x = require("./1442.js");
var w = createjs.Point;
var B = function (e) {
  function DecorationForgeMainDialog() {
    return e.call(this, DecorationForgeMainDialog.NAME) || this;
  }
  n.__extends(DecorationForgeMainDialog, e);
  DecorationForgeMainDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    P.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_back, this.dialogDisp.btn_forgeLevel, this.dialogDisp.btn_rechargeEnergy], Z.ClickFeedbackButton);
    P.ButtonHelper.initButtons([this.dialogDisp.mc_fusionInfoCosts.btn_fusion, this.dialogDisp.mc_fusionInfoCosts.btn_premiumFusion], $.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.TextVO(y.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_main_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forgeLevelTitle, new c.LocalizedTextVO("forgeLevel")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionInfoDetail.txt_fusionTitle, new c.LocalizedTextVO("fusionNormal")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionInfoDetail.txt_premiumFusionTitle, new c.LocalizedTextVO("fusionPremium")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionInfoCosts.btn_fusion.txt_text, new c.LocalizedTextVO("fusionNormal")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionInfoCosts.btn_premiumFusion.txt_text, new c.LocalizedTextVO("fusionPremium")).autoFitToBounds = true;
    this.dialogDisp.mc_energyProgress.mouseChildren = false;
    this.dialogDisp.mc_energy.mouseChildren = false;
    this.dialogDisp.mc_fusionCurrency.mouseChildren = false;
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.btn_back.toolTipText = "back";
    this.dialogDisp.mc_energy.toolTipText = "fusionEnergy";
    this.dialogDisp.btn_forgeLevel.toolTipText = "dialog_decoForge_forgeLevelButton_tooltip";
    this.dialogDisp.btn_rechargeEnergy.toolTipText = "dialog_decoForge_forgeEnergyRecharge_tooltip";
    this.dialogDisp.mc_fusionCurrency.toolTipText = new k.CollectableItemGenericCurrencyVO(D.ClientConstCurrency.ID_FUSION_CURRENCY).getTooltipTextId();
    this._mergeButtons = new J.DecorationForgeMergeButtonsComponent(this.dialogDisp.mc_mergeButtons, this.bindFunction(this.onMergeButtonSelected));
    this._costInfoVO = new Q.DecorationForgeMainDialogCostInfoVO();
    this._completePopover = new U.SimplePopoverComponent(this.dialogDisp);
    this._completePopover.init(new v.SimplePopoverConfig(I.ClientConstFusion.POPOVER_ASSET_NAME_COMPLETE));
    this.dialogDisp.mc_fusionInfoDetail.btn_info.mouseChildren = false;
  };
  DecorationForgeMainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._mergeButtons.onShow();
    this._completePopover.onShow();
    b.CastleModel.decoStorage.requestGTD();
    b.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetDetailedCastleListVO());
    this.controller.addEventListener(T.FusionForgeEvent.ON_FUSE_DONE, this.bindFunction(this.onFuseDone));
    this.controller.addEventListener(T.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.addEventListener(_.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onResourcesUpdated));
    this.controller.addEventListener(_.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onResourcesUpdated));
    this.controller.addEventListener(f.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onResourcesUpdated));
    b.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.addEventListener(C.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.updateForgeInfo();
    this.updateSelectInfo();
    this.updateDetailedInfo();
    this.updateCostInfo();
    this.applyPreselectedDeco();
  };
  DecorationForgeMainDialog.prototype.hide = function () {
    this.controller.removeEventListener(T.FusionForgeEvent.ON_FUSE_DONE, this.bindFunction(this.onFuseDone));
    this.controller.removeEventListener(T.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onFusionForgeInfoUpdated));
    this.controller.removeEventListener(_.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onResourcesUpdated));
    this.controller.removeEventListener(_.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onResourcesUpdated));
    this.controller.removeEventListener(f.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onResourcesUpdated));
    b.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.removeEventListener(C.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this._mergeButtons.onHide();
    this._completePopover.onHide();
    e.prototype.hide.call(this);
  };
  DecorationForgeMainDialog.prototype.updateForgeInfo = function () {
    var e = b.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forgeLevel, new l.LocalizedNumberVO(e.level)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_energy.txt_amount, new c.LocalizedTextVO("value_proportional_value", [e.currentEnergy, e.getFullEnergy()])).autoFitToBounds = true;
    this.updateEnergyProgressTooltip();
    var t = new S.SimpleProgressBarComponent(this.dialogDisp.mc_energyProgress, 196);
    t.setProgressByPercent(e.getCurrentEnergyFillFactor());
    t.fillMc = this.dialogDisp.mc_energyProgress.mc_overfill;
    t.setProgressByPercent(e.getCurrentEnergyOverfillFactor());
    this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionCurrency.txt_amount, new l.LocalizedNumberVO(b.CastleModel.currencyData.getAmountById(D.ClientConstCurrency.ID_FUSION_CURRENCY))).autoFitToBounds = true;
  };
  DecorationForgeMainDialog.prototype.updateEnergyProgressTooltip = function () {
    this.dialogDisp.mc_energyProgress.toolTipText = b.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).getEnergyProgressbarTooltipText();
  };
  DecorationForgeMainDialog.prototype.updateSelectInfo = function () {
    var e = this.dialogDisp.mc_fusionInfoSelect;
    var t = !this._mergeButtons.areAllButtonsSelected();
    e.visible = t;
    if (t) {
      this.textFieldManager.registerTextField(e.txt_info, new c.LocalizedTextVO(this._mergeButtons.buttonTarget.currentSelectionVO ? "dialog_decoForge_main_desc2" : "dialog_decoForge_main_desc1")).verticalAlign = A.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
  };
  DecorationForgeMainDialog.prototype.updateDetailedInfo = function () {
    var e = this.dialogDisp.mc_fusionInfoDetail;
    var t = this._mergeButtons.areAllButtonsSelected();
    e.visible = t;
    if (t) {
      var i = this._mergeButtons.buttonSource.currentSelectionVO.getDecoBuildingVO();
      var n = d.int(i.fusionInfoVO.getCurrentLevel());
      var a = this._mergeButtons.buttonTarget.currentSelectionVO.getDecoBuildingVO();
      var r = d.int(a.fusionInfoVO.getCurrentLevel());
      var u = d.int(a.fusionInfoVO.getCurrentTotalXp());
      var p = this._mergeButtons.buttonCatalyst.currentSelectionVO.getCatalystVO();
      var h = d.int(p.xmlCurrencyVO.tier);
      var g = d.int(b.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(s.FusionConst.DECORATION_FORGE_ID, r));
      var C = b.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID);
      var _ = d.int(b.CastleModel.fusionForgeData.xml.getFusionSystem(s.FusionConst.DECORATION_FORGE_ID).premiumBonusFusionXPChance);
      var m = d.int(b.CastleModel.fusionForgeData.xml.getFusionSystem(s.FusionConst.DECORATION_FORGE_ID).baseBonusFusionXPChance);
      var f = d.int(s.FusionConst.getFusionXPFromSource(n, r));
      var O = d.int(s.FusionConst.getBonusFusionXPWithForgeMax(n, r, C.level));
      var E = d.int(s.FusionConst.getBonusFusionXPChance(m, n, r, h, g));
      var y = f;
      var D = y + d.int(O + s.FusionConst.getBonusFusionXPBoost(O, E, 0));
      var I = y + d.int(O + s.FusionConst.getBonusFusionXPBoost(O, E, _));
      var T = d.int(s.FusionConst.getLevelFromXP(u + y));
      var v = d.int(s.FusionConst.getLevelFromXP(u + D));
      var S = d.int(s.FusionConst.getLevelFromXP(u + I));
      var A = d.int(s.FusionConst.getDecorationPointsFromFusionLevel(T));
      var L = d.int(s.FusionConst.getDecorationPointsFromFusionLevel(v));
      var P = d.int(s.FusionConst.getDecorationPointsFromFusionLevel(S));
      this.fillDetailInfoValue(e.mc_normalValue0, 1, T == v ? new l.LocalizedNumberVO(T) : new c.LocalizedTextVO("value_or_default", [T, v]));
      this.fillDetailInfoValue(e.mc_normalValue1, 2, y == D ? new c.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [y]) : new c.LocalizedTextVO("value_or_add", [y, D]));
      this.fillDetailInfoValue(e.mc_normalValue2, 3, A == L ? new l.LocalizedNumberVO(A) : new c.LocalizedTextVO("value_or_default", [A, L]));
      this.fillDetailInfoValue(e.mc_premiumValue0, 1, new l.LocalizedNumberVO(S));
      this.fillDetailInfoValue(e.mc_premiumValue1, 2, new c.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [I]));
      this.fillDetailInfoValue(e.mc_premiumValue2, 3, new l.LocalizedNumberVO(P));
    }
  };
  DecorationForgeMainDialog.prototype.fillDetailInfoValue = function (e, t, i) {
    e.mc_icon.gotoAndStop(t);
    this.textFieldManager.registerTextField(e.txt_value, i);
  };
  DecorationForgeMainDialog.prototype.updateCostInfo = function () {
    var e = this.dialogDisp.mc_fusionInfoCosts;
    this.destroyCollectableRenderList();
    var t = this._mergeButtons.buttonTarget.currentSelectionVO != null;
    e.visible = t;
    if (t) {
      this.updateCostInfoVO();
      this.fillEnergyCostInfoValue(e.mc_normalValue0, this._costInfoVO.energy.amount);
      this.fillCostInfoValue(e.mc_normalValue1, this._costInfoVO.fusionCurrency);
      this.fillCostInfoValue(e.mc_normalValue2, this._costInfoVO.sequenceCurrency);
      this.fillEnergyCostInfoValue(e.mc_premiumValue0, this._costInfoVO.energy.amount);
      this.fillCostInfoValue(e.mc_premiumValue1, this._costInfoVO.c2);
      var i = this._mergeButtons.areSourceAndCatalystSelected();
      P.ButtonHelper.enableButton(e.btn_fusion, i && this._costInfoVO.fusionCurrency.hasEnough);
      P.ButtonHelper.enableButton(e.btn_premiumFusion, i);
    }
  };
  DecorationForgeMainDialog.prototype.updateCostInfoVO = function () {
    var e = d.int(this._mergeButtons.buttonTarget.currentSelectionVO.getDecoBuildingVO().fusionInfoVO.getCurrentLevel());
    this._costInfoVO.energy.amount = s.FusionConst.getFusionEnergyCost(e);
    this._costInfoVO.energy.hasEnough = this._costInfoVO.energy.amount <= b.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).currentEnergy;
    this._costInfoVO.fusionCurrency.amount = s.FusionConst.getFusionCurrencyCost(s.FusionConst.DECORATION_FORGE_ID, e);
    this._costInfoVO.fusionCurrency.hasEnough = this._costInfoVO.fusionCurrency.amount <= this.getAvailableGoods(this._costInfoVO.fusionCurrency.collectableType);
    var t = b.CastleModel.fusionForgeData.xml.getCostSequenceByTargetLevel(s.FusionConst.DECORATION_FORGE_ID, e);
    this._costInfoVO.sequenceCurrency.amount = t.costAmount;
    this._costInfoVO.sequenceCurrency.collectableType = F.CollectableHelper.getTypeByServerKey(t.costJSONKey, null);
    this._costInfoVO.sequenceCurrency.hasEnough = this._costInfoVO.sequenceCurrency.amount <= this.getAvailableGoods(this._costInfoVO.sequenceCurrency.collectableType);
    this._costInfoVO.c2.amount = s.FusionConst.getPremiumFusionC2Cost(e);
    this._costInfoVO.c2.hasEnough = this._costInfoVO.c2.amount <= this.getAvailableGoods(this._costInfoVO.c2.collectableType);
  };
  DecorationForgeMainDialog.prototype.getAvailableGoods = function (e) {
    if (b.CastleModel.areaData.activeArea.isMyHomeCastle) {
      return d.int(H.CostHelper.getAvailableGoods(e));
    } else {
      return d.int(H.CostHelper.getAvailableGoodsFromDetailedCastleVO(b.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(m.KingdomEnum.CLASSIC.id), e));
    }
  };
  DecorationForgeMainDialog.prototype.fillEnergyCostInfoValue = function (e, t) {
    e.mc_energyIcon.visible = true;
    e.mc_icon.visible = false;
    e.mc_icon.gotoAndStop(4);
    e.mouseChildren = false;
    e.toolTipText = "fusionEnergy";
    this.textFieldManager.registerTextField(e.txt_text, new l.LocalizedNumberVO(t));
    H.CostHelper.setCostColor(e.txt_text, !this._costInfoVO.energy.hasEnough);
  };
  DecorationForgeMainDialog.prototype.fillCostInfoValue = function (e, t) {
    e.mc_icon.visible = true;
    e.mc_energyIcon.visible = false;
    var i = new E.CollectableRenderOptions(E.CollectableRenderOptions.SET_COST_LIST, new w(23, 20));
    i.costTextfield.useOtherResourceStorage = b.CastleModel.areaData.activeArea.isMyHomeCastle ? null : b.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(m.KingdomEnum.CLASSIC.id).getResourcesAsCollectableList();
    G.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new O.CollectableRenderClips(e), F.CollectableHelper.createVO(t.collectableType.type, t.amount, t.collectableType.id), i);
  };
  DecorationForgeMainDialog.prototype.applyPreselectedDeco = function () {
    if (this.dialogProperties && this.dialogProperties.preselectedDeco) {
      this.dialogProperties.preselectedDeco.btn = this._mergeButtons.buttonTarget;
      this._mergeButtons.selectItem(this.dialogProperties.preselectedDeco);
    }
  };
  DecorationForgeMainDialog.prototype.showCompletePopover = function (e, t) {
    var i = this._completePopover.getAssetDisp();
    var n = e.itemVO.buildingVO;
    this.textFieldManager.registerTextField(i.txt_title, new u.TextVO(y.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_complete_title"))).autoFitToBounds = true;
    G.CollectableRenderHelper.displaySingleItemComplete(this, new O.CollectableRenderClips(i), e.itemVO, new E.CollectableRenderOptions(E.CollectableRenderOptions.ICON, new w(310, 208)));
    this.textFieldManager.registerTextField(i.txt_level, new l.LocalizedNumberVO(n.fusionInfoVO.getCurrentLevel())).autoFitToBounds = true;
    i.mc_bonusXP.visible = t > 0;
    this.textFieldManager.registerTextField(i.txt_xp, new c.LocalizedTextVO("value_proportional_value", [n.fusionInfoVO.getDeltaXpBetweenCurrentLevels(), n.fusionInfoVO.getDeltaXpForNextLevel()]));
    new S.SimpleProgressBarComponent(i.mc_progress, 238).setProgressByPercent(n.fusionInfoVO.getDeltaXpPercentFactor());
    this._completePopover.startSequence();
  };
  DecorationForgeMainDialog.prototype.onClick = function (t) {
    if (P.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_back:
          M.CastleExternalDialog.dialogHandler.registerDefaultDialogs(K.FusionForgeHubDialog, new V.FusionForgeHubDialogProperties());
          this.hide();
          break;
        case this.dialogDisp.btn_forgeLevel:
          M.CastleExternalDialog.dialogHandler.registerDefaultDialogs(z.DecorationForgeUpgradeDialog);
          break;
        case this.dialogDisp.btn_rechargeEnergy:
          M.CastleExternalDialog.dialogHandler.registerDefaultDialogs(X.DecorationForgeRechargeEnergyDialog);
          break;
        case this.dialogDisp.mc_fusionInfoCosts.btn_fusion:
          this.onFuseButtonClicked(false);
          break;
        case this.dialogDisp.mc_fusionInfoCosts.btn_premiumFusion:
          this.onFuseButtonClicked(true);
          break;
        case this.dialogDisp.btn_help:
          M.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("dialog_decoForge_main_help"));
      }
    }
  };
  DecorationForgeMainDialog.prototype.onMergeButtonSelected = function () {
    this.updateSelectInfo();
    this.updateDetailedInfo();
    this.updateCostInfo();
  };
  DecorationForgeMainDialog.prototype.onFuseButtonClicked = function (e) {
    if (this._costInfoVO.energy.hasEnough) {
      if (!e && !this._costInfoVO.sequenceCurrency.hasEnough) {
        var t = new N.CollectableList();
        t.addItem(F.CollectableHelper.createVO(this._costInfoVO.sequenceCurrency.collectableType.type, this._costInfoVO.sequenceCurrency.amount));
        var i = new Y.CastleResourceWaitDialogProperties();
        i.parseCosts(t);
        M.CastleExternalDialog.dialogHandler.registerDialogs(W.CastleResourceWaitDialog, i);
        return;
      }
      if (!e || this._costInfoVO.c2) {
        var n = this._mergeButtons.buttonSource.currentSelectionVO;
        var o = this._mergeButtons.buttonTarget.currentSelectionVO;
        var a = this._mergeButtons.buttonCatalyst.currentSelectionVO;
        var r = n.getDecoBuildingVO();
        var l = o.getDecoBuildingVO();
        var c = a.getCatalystVO();
        b.CastleModel.smartfoxClient.sendCommandVO(new p.C2SDecoForgeFuseEventVO(r.wodId, r.fusionInfoVO.uniqueId, o.kingdomId, o.areaId, l.wodId, l.fusionInfoVO.uniqueId, l.objectId, c.id, e));
        b.CastleModel.decoStorage.requestGTD();
        b.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).requestDataFromServer();
      } else {
        M.CastleExternalDialog.dialogHandler.registerDialogs(j.CastleNoMoneyC2Dialog, new R.CastleNoMoneyC2DialogProperties());
      }
    } else {
      M.CastleExternalDialog.dialogHandler.registerDialogs(q.DecorationForgeNotEnoughEnergyDialog, new x.DecorationForgeNotEnoughEnergyDialogProperties(this._costInfoVO.energy.amount, b.CastleModel.fusionForgeData.getForge(s.FusionConst.DECORATION_FORGE_ID).currentEnergy));
    }
  };
  DecorationForgeMainDialog.prototype.onFuseDone = function (e) {
    var t = e.params[0];
    t.btn = this._mergeButtons.buttonTarget;
    var i = d.int(e.params[1]);
    this._mergeButtons.reset();
    this._mergeButtons.selectItem(t);
    if (t) {
      this.showCompletePopover(t, i);
    }
  };
  DecorationForgeMainDialog.prototype.onFusionForgeInfoUpdated = function (e) {
    this.updateForgeInfo();
    this.updateCostInfo();
  };
  DecorationForgeMainDialog.prototype.onResourcesUpdated = function (e) {
    this.updateCostInfo();
  };
  DecorationForgeMainDialog.prototype.onTimer = function (e) {
    this.updateEnergyProgressTooltip();
  };
  DecorationForgeMainDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.mc_fusionInfoDetail.btn_info) {
      var i = this._mergeButtons.buttonSource.currentSelectionVO.getDecoBuildingVO();
      var n = this._mergeButtons.buttonTarget.currentSelectionVO.getDecoBuildingVO();
      var o = this._mergeButtons.buttonCatalyst.currentSelectionVO.getCatalystVO();
      L.CastleFusionCompareToolTip.showToolTip(this.dialogDisp.mc_fusionInfoDetail.btn_info, i.fusionInfoVO, n.fusionInfoVO, o);
    }
  };
  DecorationForgeMainDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.dialogDisp.mc_fusionInfoDetail.btn_info) {
      L.CastleFusionCompareToolTip.hideToolTip();
    }
  };
  DecorationForgeMainDialog.prototype.onDetailedCastleListArrived = function (e) {
    this.updateCostInfo();
  };
  Object.defineProperty(DecorationForgeMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeMainDialog.NAME = "DecorationForgeMain";
  return DecorationForgeMainDialog;
}(M.CastleExternalDialog);
exports.DecorationForgeMainDialog = B;
var F = require("./45.js");
var N = require("./48.js");
var k = require("./155.js");
var U = require("./294.js");
var G = require("./25.js");
var H = require("./66.js");
var j = require("./138.js");
var W = require("./873.js");
var Y = require("./982.js");
var K = require("./990.js");
var z = require("./2650.js");
var q = require("./1448.js");
var X = require("./993.js");
var Q = require("./2652.js");
var J = require("./2654.js");
var Z = require("./36.js");
var $ = require("./121.js");
a.classImplementsInterfaces(B, "ICollectableRendererList");